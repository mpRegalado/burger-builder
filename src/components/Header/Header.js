import React from 'react'
import useLink from '../../hooks/useLink'
import burgerLogo from '../../assets/images/burger-logo.png'
import { 
    EuiHeader,
    EuiHeaderLinks,
    EuiLink,
    EuiHeaderSectionItem,
    EuiHeaderLink,
    EuiImage,
    EuiSpacer } from '@elastic/eui'

const Header = props => {
    const {linkTo} = useLink();
    const pages = {
        'Burger Builder':'/',
        'Checkout':'/checkout'
    }

    const navLinks = Object.keys(pages).map((tabName) => (
        <EuiHeaderLink key={pages[tabName]} {...linkTo(pages[tabName],true)}>{tabName}</EuiHeaderLink>
    ))
    
    return (
    <EuiHeader position="fixed">
        <EuiSpacer />
        <EuiHeaderSectionItem border="none">
            <EuiLink {...linkTo("/")}>
                <EuiImage size={50} url={burgerLogo} alt="Burger Logo" />
            </EuiLink>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
            <EuiHeaderLinks>
                {navLinks}
            </EuiHeaderLinks>
        </EuiHeaderSectionItem>
    </EuiHeader>
    )
}

export default Header;