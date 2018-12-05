import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'
import App from './App';
import * as stores from './store';


ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);