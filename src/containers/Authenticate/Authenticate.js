import React from 'react'
import AuthenticationForm from '../../components/Form/AuthenticationForm/AuthenticationForm';

import {useState} from 'react'

const Authenticate = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [existing, setExisting] = useState(false);
    const [equalPasswords, setEqualPasswords] = useState(false);

    const submitHandler = () => {
        const credentials = {
            email: email,
            password: password
        }
        console.log(credentials);
    }

    return (<AuthenticationForm 
        email={email}
        password={password}
        useExisting={existing}
        onEmailChangeHandler={(e) => {setEmail(e.target.value)}}
        onPasswordChangeHandler={e => {setPassword(e.target.value)}}
        submitHandler={submitHandler}
        onSwitchHandler={e => {setExisting(e.target.checked)}}
        equalPasswords={equalPasswords}
        onPasswordConfirmChangeHandler={e => {setEqualPasswords(password === e.target.value)}}
    />)
}

export default Authenticate;