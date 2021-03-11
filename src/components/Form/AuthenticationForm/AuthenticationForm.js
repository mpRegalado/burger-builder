import React, {useState} from 'react'
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
    useExisting,
    submitHandler,
    onEmailChangeHandler,
    onPasswordChangeHandler,
    onSwitchHandler,
    loading
}) => {
    const [validConfirm, setValidConfirm] = useState(false);

    const validateEmail = (input) => {
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        return re.test(input);
    };
    const validatePassword = (input) => {
        return input.length >= 6;
    }
    const validateConfirm = (input) => {
        return input === password;
    }

    const canSubmit = () => {
        return validateEmail(email) && validatePassword(password) && (validConfirm || useExisting);
    }
    const isEmailInvalid = !validateEmail(email);
    const isPasswordInvalid = !validatePassword(password);
    const invalidEmailMessage = isEmailInvalid ? ["This has to be a valid email! xxx@xxx.xxx"] : null;
    const invalidPasswordMessage = isPasswordInvalid ? ["Password is too short! 6 characters or longer"] : null;
    const invalidConfirmMessage = !validConfirm ? ["Type the same password!"] : null;
    return(
        <EuiFlexGroup direction="column">
            <EuiFlexItem><EuiText><h1>{useExisting ? "Log In" : "Sign Up"}</h1></EuiText></EuiFlexItem>
            <EuiFlexItem><EuiForm>
                <EuiFormRow><EuiSwitch checked={useExisting} onChange={onSwitchHandler} label="Already have an account?"/></EuiFormRow>
                <EuiFormRow label="Email" isInvalid={isEmailInvalid} error={invalidEmailMessage}>
                    <EuiFieldText value={email}
                        onChange={onEmailChangeHandler}
                        placeholder="Email"
                        prepend={<EuiIcon type="email"/>}
                        isInvalid={isEmailInvalid}
                        />
                </EuiFormRow>
                <EuiFormRow label="Password" isInvalid={isPasswordInvalid} error={invalidPasswordMessage}>
                    <EuiFieldPassword 
                        type="dual"
                        placeholder="Password"
                        onChange={onPasswordChangeHandler}
                        value={password}
                        isInvalid={isPasswordInvalid}
                        />
                </EuiFormRow>
                {useExisting ? null : <EuiFormRow label="Repeat Password" isInvalid={!validConfirm} error={invalidConfirmMessage}>
                    <EuiFieldPassword type="dual" 
                        placeholder="Password"
                        onChange={e => {setValidConfirm(validateConfirm(e.target.value))}}
                        isInvalid={!validConfirm}
                        />
                </EuiFormRow>}
            </EuiForm></EuiFlexItem>
            <EuiFlexItem>
                <EuiButton
                    onClick={submitHandler} 
                    isDisabled={!canSubmit()}
                    isLoading={loading}>
                        {useExisting ? "Log In" : "Sign Up"}
                </EuiButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
}

export default AuthenticationForm;