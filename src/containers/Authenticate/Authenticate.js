import React from 'react'
import AuthenticationForm from '../../components/Form/AuthenticationForm/AuthenticationForm';
import useAuth from '../../hooks/useAuth';
import {EuiCallOut} from '@elastic/eui'
const Authenticate = props => {
    const {
        email, setEmail,
        password, setPassword,
        existing, setExisting,
        loading, error,
        submitHandler
    } = useAuth()

    return (
    <>
        <AuthenticationForm 
            email={email}
            password={password}
            useExisting={existing}
            onEmailChangeHandler={(e) => {setEmail(e.target.value)}}
            onPasswordChangeHandler={e => {setPassword(e.target.value)}}
            submitHandler={submitHandler}
            onSwitchHandler={e => {setExisting(e.target.checked)}}
            loading={loading}
        />
        {error && <EuiCallOut title="There was an error" color="danger" iconType="alert">{error.message}</EuiCallOut> }
    </>)
}

export default Authenticate;