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
      <EuiPage direction="column">
        <EuiPageBody restrictWidth={true}>
          <Header />
          <EuiPageContent>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    )
  };
};

export default Layout;
