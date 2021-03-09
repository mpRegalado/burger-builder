import React from 'react'
import {EuiCallOut, EuiButton} from '@elastic/eui'

const ErrorPrompt = ({errorTitle, children}) => (
    <EuiCallOut title={errorTitle} color="danger" iconType="alert">
        {children}
        <EuiButton href="/" color="warning">Reload site</EuiButton>
    </EuiCallOut>
)

export default ErrorPrompt;