import React from 'react';
import { connect } from 'react-redux';

import useCheckout from '../../hooks/useCheckout'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import DeliveryForm from '../../components/Form/DeliveryForm/DeliveryForm'
import { 
    EuiPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton
} from '@elastic/eui'

const Checkout = props => {
    
    const {
        textFieldProps,
        submitOrder,
        changeRequired,
        setChangeRequired,
        scheduledDelivery,
        setScheduledDelivery
    } = useCheckout();

    const onOrderHandler = () => {
        submitOrder(props.ingredients);
    }

    const canOrder = () => {
        let order=true;
        for (let key in textFieldProps){
            order = order && textFieldProps[key].isValid;
        }
        return order && props.purchasable;
    }

    return (
        <EuiFlexGroup direction="column" >
            <EuiFlexItem>
                <EuiPanel>
                    <OrderSummary ingredients={props.ingredients} price={props.price} />
                </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem>
                <DeliveryForm 
                    textFieldProps={textFieldProps}
                    scheduledDelivery={scheduledDelivery}
                    setScheduledDelivery={setScheduledDelivery}
                    changeRequired={changeRequired}
                    setChangeRequired={setChangeRequired}    
                />
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiButton isDisabled={!canOrder()} onClick={onOrderHandler}>Order Now!</EuiButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice,
        purchasable: state.purchasable
    }
}
export default connect(mapStateToProps)(Checkout);