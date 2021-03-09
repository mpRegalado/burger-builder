import React from 'react'
import { EuiFieldText, EuiFormRow } from '@elastic/eui'

const TextField = ({value, label, valueChanger, placeholder}) => {
    //console.log('[TEXTFIELD]' + label);    
    return(
        <EuiFormRow label={label}>
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