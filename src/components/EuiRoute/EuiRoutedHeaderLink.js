import React from 'react'

import { EuiHeaderLink } from '@elastic/eui'
import useLink from '../../hooks/useLink'
import { useLocation } from 'react-router'

export default function EuiRoutedHeaderLink ({to,...rest}){
    const location = useLocation();
    const {linkTo} = useLink();
    const isActive = location.pathname === to;
    const props = {
        ...rest,
        ...linkTo(to),
        isActive: isActive
    }
    return <EuiHeaderLink {...props} />
}