import React from 'react';
import ReactDOM from 'react-dom';
import Main from './react/Main';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Store from './redux/store'

ReactDOM.render(
  <Provider store={Store}>
      <BrowserRouter>
        <Route to='/' component={Main}/>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
