import React from 'react'

import useLink from '../../hooks/useLink'
import burgerLogo from '../../assets/images/burger-logo.png'
import EuiRoutedHeaderLink from '../EuiRoute/EuiRoutedHeaderLink'
import { 
    EuiHeader,
    EuiHeaderLinks,
    EuiHeaderLink,
    EuiLink,
    EuiHeaderSectionItem,
    EuiImage } from '@elastic/eui'

const Header = props => {

    const { linkTo } = useLink();

    return (<EuiHeader position='fixed' >
        <EuiHeaderSectionItem border="none">
            <EuiLink {...linkTo("/")}>
                <EuiImage size={50} alt="burger-logo" url={burgerLogo} />
            </EuiLink>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
            <EuiHeaderLinks >
                <EuiRoutedHeaderLink to="/">Burger Builder</EuiRoutedHeaderLink>
                <EuiRoutedHeaderLink to="/checkout">Checkout</EuiRoutedHeaderLink>
            </EuiHeaderLinks>
        </EuiHeaderSectionItem>
    </EuiHeader>)
}

export default Header;