import React from 'react';
// @ components
import AppRouter from './router/AppRouter';

// @ redux
import {Provider} from 'react-redux';

// @ scripts JS
import {store} from './store/store';


function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
