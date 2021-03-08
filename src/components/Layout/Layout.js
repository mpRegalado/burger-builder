import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Header from '../Header/Header'
import { EuiPage, EuiPageBody } from '@elastic/eui'

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
      <EuiPage paddingSize="none">
        <EuiPageBody>
          <Header />
          {this.props.children}
        </EuiPageBody>
      </EuiPage>
    )
  };
};

export default Layout;
