import React from 'react';

import { Provider } from 'react-redux'
import store from './redux/store'

import './App.css';
import Counter from './containers/Counter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
