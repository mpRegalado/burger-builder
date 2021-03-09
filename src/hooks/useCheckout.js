import { useState } from 'react'
import axios from '../axios-order'

const validateEmail = (input) => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return re.test(input);
};

const useCheckout = () => {
    const [email, setEmail] = useState('foo@bar.com');
    const [name, setName] = useState('Benito');
    const [address, setAddress] = useState('Calle Falsa 123');
    const [zipCode, setZipCode] = useState('42069');
    const [phoneNumber, setPhoneNumber] = useState('481516234');
    const [changeRequired, setChangeRequired] = useState(false);
    const [scheduledDelivery, setScheduledDelivery] = useState(false);
    const [modalState, setModalState] = useState(null);

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
            zipCode
        }
        
        const order = {
            ingredients,
            client,
            changeRequired,
            scheduledDelivery
        }
        axios.post('/orders.json',order)
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