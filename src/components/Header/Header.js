import React from 'react'

import burgerLogo from '../../assets/images/burger-logo.png'
import LinkRouter from '../../hoc/linkRouter/linkRouter'
import { 
    EuiHeader,
    EuiHeaderLinks,
    EuiLink,
    EuiHeaderSectionItem,
    EuiHeaderLink,
    EuiImage,
    EuiSpacer } from '@elastic/eui'

const Header = props => {
    const pages = {
        'Burger Builder':'/',
        'Checkout':'/checkout'
    }

    const navLinks = Object.keys(pages).map((tabName) => (
        <LinkRouter key={pages[tabName]} to={pages[tabName]} Component={EuiHeaderLink} checkActive={true}>{tabName}</LinkRouter>
    ))
    
    return (
    <EuiHeader position="fixed">
        <EuiSpacer />
        <EuiHeaderSectionItem border="none">
            <LinkRouter to="/" Component={EuiLink}>
                <EuiImage size={50} url={burgerLogo} alt="Burger Logo" />
            </LinkRouter>
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