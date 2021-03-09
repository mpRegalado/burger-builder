import React, {Component} from 'react';
import Header from '../../components/Header/Header'
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder'
import { 
  EuiPage,
  EuiPageBody,
  EuiPageContent
 } from '@elastic/eui'

class Layout extends Component{

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }
  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer: true});
  }

  render (){
    return (
      <EuiPage direction="column">
        <EuiPageBody restrictWidth={true}>
          <Header />
          <EuiPageContent>
            <BurgerBuilder />
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    )
  };
};

export default Layout;
