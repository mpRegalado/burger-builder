import React, {Component} from 'react';
import Header from '../../components/Header/Header'
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder'
import Checkout from '../Checkout/Checkout'
import { Route, Switch } from 'react-router'
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
      <div style={{display:"flex", minHeight:"100vh"}}>
      <EuiPage direction="column">
        <EuiPageBody restrictWidth={true} direction="column" paddingSize="l">
          <Header />
          <EuiPageContent
            verticalPosition="center"
            horizontalPosition="center">
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
      </div>
    )
  };
};

export default Layout;
