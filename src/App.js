import React, {Component} from 'react';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { BrowserRouter } from 'react-router-dom';
import '@elastic/eui/dist/eui_theme_light.css';

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
