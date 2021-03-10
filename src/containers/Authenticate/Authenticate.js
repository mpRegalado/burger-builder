import React from 'react'
import AuthenticationForm from '../../components/Form/AuthenticationForm/AuthenticationForm';
import useAuth from '../../hooks/useAuth';

const Authenticate = props => {
    const {
        email, setEmail,
        password, setPassword,
        existing, setExisting,
        submitHandler
    } = useAuth()

    return (<AuthenticationForm 
        email={email}
        password={password}
        useExisting={existing}
        onEmailChangeHandler={(e) => {setEmail(e.target.value)}}
        onPasswordChangeHandler={e => {setPassword(e.target.value)}}
        submitHandler={submitHandler}
        onSwitchHandler={e => {setExisting(e.target.checked)}}
    />)
}

export default Authenticate;