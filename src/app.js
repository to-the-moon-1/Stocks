import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/redux-store';

import StocksContainer from './container/stocks-container';

import 'font-awesome/css/font-awesome.min.css';
import './styles/app.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <StocksContainer />
    </div>
  </Provider>
);

export default App;
