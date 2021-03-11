import axios from '../axios-order'
import { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import {AuthContext} from '../context/auth-context'

const usePastOrders = () => {
    const [pastOrders, setPastOrders] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {authenticated, userId} = useContext(AuthContext)
    //Load the past orders on first call
    useEffect(() => {
        setLoading(true);
        axios.get('/orders/'+ userId + '.json?auth='+authenticated)
            .then(response => {
                setLoading(false);
                if(!response.data) {
                    setError({message: "There are no orders yet, make some!"})
                }else {
                    setPastOrders(Object.keys(response.data).map(id => {
                        const order = response.data[id];
                        return {id,
                            ...order.client,
                            ingredients:order.ingredients,
                            changeRequired:order.changeRequired,
                            deliveryTime:moment(order.deliveryTime)
                        }
                    }))
                }
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });
    }, [authenticated, userId])

    const clearError = () => {
        setError(null);
    };
    return {pastOrders,loading,error,clearError}
}

export default usePastOrders