import React from 'react'
import { EuiFieldText, EuiFormRow } from '@elastic/eui'

const TextField = ({value, label, valueChanger, placeholder, isValid}) => {
    //console.log('[TEXTFIELD]' + label);    
    return(
        <EuiFormRow label={label} isInvalid={!isValid}>
            <EuiFieldText
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    valueChanger(e.target.value);
                }}
            />
        </EuiFormRow>
    )
}

export default React.memo(TextField);