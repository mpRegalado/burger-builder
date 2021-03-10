import React from 'react'
import {
    EuiFormRow,
    EuiForm,
    EuiFieldText,
    EuiFieldPassword,
    EuiText,
    EuiButton,
    EuiIcon,
    EuiFlexItem,
    EuiSwitch,
    EuiFlexGroup
} from '@elastic/eui'

const AuthenticationForm = ({
    email,
    password,
    equalPasswords,
    useExisting,
    submitHandler,
    onEmailChangeHandler,
    onPasswordChangeHandler,
    onPasswordConfirmChangeHandler,
    onSwitchHandler
}) => {
    const validateEmail = (input) => {
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        return re.test(input);
    };
    const canSubmit = () => {
        return validateEmail(email) && password.length > 0 && (equalPasswords || useExisting);
    }
    return(
        <EuiFlexGroup direction="column">
            <EuiFlexItem><EuiText><h1>{useExisting ? "Log In" : "Sign Up"}</h1></EuiText></EuiFlexItem>
            <EuiFlexItem><EuiForm>
                <EuiFormRow><EuiSwitch checked={useExisting} onChange={onSwitchHandler} label="Already have an account?"/></EuiFormRow>
                <EuiFormRow label="Email">
                    <EuiFieldText value={email}
                        onChange={onEmailChangeHandler}
                        placeholder="Email"
                        prepend={<EuiIcon type="email"/>}
                        isInvalid={!validateEmail(email)}
                        />
                </EuiFormRow>
                <EuiFormRow label="Password">
                    <EuiFieldPassword 
                        type="dual"
                        placeholder="Password"
                        onChange={onPasswordChangeHandler}
                        value={password}
                        />
                </EuiFormRow>
                {useExisting ? null : <EuiFormRow label="Repeat Password">
                    <EuiFieldPassword type="dual" 
                        placeholder="Password"
                        onChange={onPasswordConfirmChangeHandler}
                        isInvalid={!equalPasswords}
                        />
                </EuiFormRow>}
            </EuiForm></EuiFlexItem>
            <EuiFlexItem><EuiButton onClick={submitHandler} isDisabled={!canSubmit()}>{useExisting ? "Log In" : "Sign Up"}</EuiButton></EuiFlexItem>
        </EuiFlexGroup>
    );
}

export default AuthenticationForm;