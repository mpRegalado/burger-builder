import React, {useState} from 'react';
import { connect } from 'react-redux';

import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import DeliveryForm from '../../components/Form/DeliveryForm/DeliveryForm'
import { 
    EuiPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton
} from '@elastic/eui'

const Checkout = props => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [changeRequired, setChangeRequired] = useState(false);
    const [scheduledDelivery, setScheduledDelivery] = useState(false);

    const textFieldProps = {
        email:{
            value:email,
            valueChanger:setEmail,
            label:'Email',
            placeholder:'Email'
        },
        name:{
            value:name,
            valueChanger:setName,
            label:'Name',
            placeholder:'Name'
        },
        address:{
            value:address,
            valueChanger:setAddress,
            label:'Address',
            placeholder:'Address'
        },
        zipCode:{
            value:zipCode,
            valueChanger:setZipCode,
            label:'Zip Code',
            placeholder:'Zip Code'
        },
        phoneNumber:{
            value:phoneNumber,
            valueChanger:setPhoneNumber,
            label:'Phone Number',
            placeholder:'Phone Number'
        }        
    }

    const deliveryHandler =  () => {
        const ingredients = {};
        for (let key in props.ingredients){
            ingredients[key] = props.ingredients[key].ammount;
        };
        const client = {
            changeRequired:changeRequired,
            scheduledDelivery:scheduledDelivery
        };
        for (let key in textFieldProps){
            client[key]=textFieldProps[key].value;
        }
        const order = {
            ingredients: ingredients,
            client: client
        }
        console.log(order)
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
                <EuiButton isDisabled={!props.purchasable} onClick={deliveryHandler}>Order Now!</EuiButton>
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