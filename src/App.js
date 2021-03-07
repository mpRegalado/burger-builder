import React, {Component} from 'react';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
