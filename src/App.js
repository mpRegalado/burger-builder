import React, {Component} from 'react';

import Layout from './containers/Layout/Layout'
import { BrowserRouter } from 'react-router-dom';
import '@elastic/eui/dist/eui_theme_light.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
