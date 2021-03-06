import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import App from './components/App';
import store from './store';
import history from './store/history';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router history={history}>
              <App />
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
