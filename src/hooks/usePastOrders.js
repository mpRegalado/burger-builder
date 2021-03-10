import axios from '../axios-order'
import { useState, useEffect } from 'react'
import moment from 'moment'

const usePastOrders = () => {
    const [pastOrders, setPastOrders] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Load the past orders on first call
    useEffect(() => {
        setLoading(true);
        axios.get('/orders.json')
            .then(response => {
                setLoading(false);

                setPastOrders(Object.keys(response.data).map(id => {
                    const order = response.data[id];
                    return {id,
                        ...order.client,
                        ingredients:order.ingredients,
                        changeRequired:order.changeRequired,
                        deliveryTime:moment(order.deliveryTime)
                    }
                }))
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });
    }, [])

    const clearError = () => {
        setError(null);
    };
    return {pastOrders,loading,error,clearError}
}

export default usePastOrders