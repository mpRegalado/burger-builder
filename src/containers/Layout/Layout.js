import React from 'react';
import Header from '../../components/Header/Header'
import { 
  EuiPage,
  EuiPageBody,
  EuiPageContent
 } from '@elastic/eui'

const Layout = props => {
  return (
    <div style={{display:"flex", minHeight:"100vh"}}>
    <EuiPage direction="column">
      <EuiPageBody restrictWidth={true} direction="column" paddingSize="l">
        <Header />
        <EuiPageContent
          verticalPosition="center"
          horizontalPosition="center">
            {props.children}
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
    </div>
  )
};

export default Layout;
