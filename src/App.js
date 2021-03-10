import React from 'react';

import Layout from './containers/Layout/Layout'
import { BrowserRouter } from 'react-router-dom';
import ErrorPrompt from './components/ErrorPrompt/ErrorPrompt';
import { Route, Switch } from 'react-router'
import Checkout from './containers/Checkout/Checkout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import '@elastic/eui/dist/eui_theme_light.css';
import PastOrders from './containers/PastOrders/PastOrders';
import Authenticate from './containers/Authenticate/Authenticate';
import SignOut from './components/SignOut/SignOut';
import {AuthContext} from './context/auth-context';

const App = () => {
  const {authenticated} = React.useContext(AuthContext)
  const authRoutes = authenticated ? [
    <Route path="/checkout" component={Checkout} />,
    <Route path="/pastOrders" component={PastOrders}/>,
    <Route path="/signOut" component={SignOut} />
  ] : [
    <Route path="/authenticate" component={Authenticate} />
  ]

    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            {authRoutes}
            <Route path="/" exact component={BurgerBuilder} />
            <Route><ErrorPrompt errorTitle="404 nothing here"/></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );

}

export default App;
