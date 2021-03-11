import React from 'react'
import { EuiFieldText, EuiFormRow } from '@elastic/eui'

const TextField = ({value, label, valueChanger, placeholder, isValid, invalidMessage}) => {
    //console.log('[TEXTFIELD]' + label);    
    return(
        <EuiFormRow label={label} isInvalid={!isValid} error={invalidMessage}>
            <EuiFieldText
                placeholder={placeholder}
                value={value}
                isInvalid={!isValid}
                onChange={(e) => {
                    valueChanger(e.target.value);
                }}
            />
        </EuiFormRow>
    )
}

export default React.memo(TextField);