import React from 'react';
// @ components
import LoginScreen from "./components/LoginScreen";

// @ redux
import {Provider} from 'react-redux';

// @ scripts JS
import {store} from './store/store';


function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}

export default App;
