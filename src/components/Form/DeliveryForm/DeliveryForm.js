import React from 'react'
import moment from 'moment'
import {
    EuiForm,
    EuiSwitch,
    EuiDatePicker
} from '@elastic/eui'
import TextField from '../FormComponents/TextField'

const DeliveryForm = ({textFieldProps, scheduledDelivery,setScheduledDelivery,changeRequired,setChangeRequired}) => {

    
    const renderedTextFields = Object.keys(textFieldProps).map((textField,index) => {
        return <TextField key={index} {...textFieldProps[textField]}/>
    });

    const renderedSchedule = [
        <EuiSwitch key="scheduleSwitch"
        label="Schedule Delivery?" 
        checked={!!scheduledDelivery} 
        onChange={(e)=>{
            setScheduledDelivery(e.target.checked ? moment().add(1,'hour'):false);
        }} />
    ]
    if(scheduledDelivery){
        renderedSchedule.push(
            <EuiDatePicker showTimeSelect showTimeSelectOnly key="schedulePicker"
            selected={scheduledDelivery}
            onChange={(e) =>{
                setScheduledDelivery(e)
            }}
            minTime={moment().add(1,'hour')}
            maxTime={moment().hour(23).minutes(30)}
            />
        )
    }
    
    return(
        <EuiForm>
            {renderedTextFields}
            {renderedSchedule}
            <EuiSwitch label="Need Change?" checked={changeRequired} onChange={(e) =>{
                setChangeRequired(e.target.checked)
            }}/>
        </EuiForm>
    );
}

export default DeliveryForm