import moment from 'moment';
import { useState, useContext } from 'react'
import axios from '../axios-order'
import {AuthContext} from '../context/auth-context'

const validateEmail = (input) => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return re.test(input);
};

const useCheckout = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [changeRequired, setChangeRequired] = useState(false);
    const [scheduledDelivery, setScheduledDelivery] = useState(false);
    const [modalState, setModalState] = useState(null);
    const {authenticated, userId } = useContext(AuthContext)

    const textFieldProps = {
        email:{
            value:email,
            valueChanger:setEmail,
            label:'Email',
            isValid: validateEmail(email)
        },
        name:{
            value:name,
            valueChanger:setName,
            label:'Name',
            isValid: name.trim().length > 0
        },
        address:{
            value:address,
            valueChanger:setAddress,
            label:'Address',
            isValid: address.trim().length > 0
        },
        zipCode:{
            value:zipCode,
            valueChanger:setZipCode,
            label:'Zip Code',
            isValid: !isNaN(zipCode) && zipCode.length === 5
        },
        phoneNumber:{
            value:phoneNumber,
            valueChanger:setPhoneNumber,
            label:'Phone Number',
            isValid: !isNaN(phoneNumber) && phoneNumber.length === 9
        }        
    }

    const submitOrder =  (ing) => {
        setModalState({
            title:"Submitting order",
            isLoading:true
        });
        const ingredients = {};
        for (let key in ing){
            ingredients[key] = ing[key].ammount;
        };
        const client ={
            email,
            name,
            address,
            zipCode,
            phoneNumber
        }
        const deliveryTime = scheduledDelivery ? scheduledDelivery : moment().add(1,'hour');
        const order = {
            ingredients,
            client,
            changeRequired,
            deliveryTime
        }
        axios.post('/orders/'+ userId +'.json?auth=' + authenticated ,order)
            .then(response => {
                setModalState({
                    title:"Order Successful!",
                    confirmButtonText: "Yum!",
                    onConfirm:modalClose
                })
            })
            .catch(error => {
                setModalState({
                    title:"There was an error",
                    confirmButtonText: "Close",
                    buttonColor:"danger"
                })
            })
    }
    
    const modalClose = () => {
        setModalState(null);
    }
    const modalProps = modalState ? {
        ...modalState,
        onCancel: modalClose
    }:null
    return {
        textFieldProps,
        submitOrder,
        changeRequired,
        setChangeRequired,
        scheduledDelivery,
        setScheduledDelivery,
        modalProps
    }
}

export default useCheckout;