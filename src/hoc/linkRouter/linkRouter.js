import React from 'react'

import useLink from '../../hooks/useLink'
import { useLocation } from 'react-router'

export default function LinkRouter ({to, checkActive=false, Component, ...rest}){
    const location = useLocation();
    
    const {linkTo} = useLink();
    
    const props = {
        ...rest,
        ...linkTo(to)
    }
    if (checkActive){
        props.isActive = location.pathname === to;
    }
    return <Component {...props} />
}