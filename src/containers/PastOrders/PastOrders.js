import React from 'react'
import usePastOrders from '../../hooks/usePastOrders'
import { 
    EuiLoadingSpinner
} from '@elastic/eui'
import ErrorPrompt from '../../components/ErrorPrompt/ErrorPrompt';
import PastOrdersGrid from '../../components/Burger/OrderSummary/PastOrdersGrid';


const PastOrders = props => {
    const {pastOrders, loading, error } = usePastOrders();
    

    let content = <p>Something is really wrong</p>;

    if (error) {
        content = <ErrorPrompt errorTitle="Could not fetch orders">
            <p>{error.message}</p>
        </ErrorPrompt>
    } else if(loading){
        content = <EuiLoadingSpinner size="xl"/>
    } else if (pastOrders) {
        console.log(pastOrders);
        content = <PastOrdersGrid orderList={pastOrders} />
    }


    return content;
}

export default PastOrders