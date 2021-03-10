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

const App = () => {

    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/pastOrders" component={PastOrders}/>
            <Route path="/authenticate" component={Authenticate} />
            <Route path="/" exact component={BurgerBuilder} />
            <Route><ErrorPrompt errorTitle="404 nothing here"/></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );

}

export default App;
