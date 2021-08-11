import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import posts from './posts/reducer'
import history from './history';

const reducers = {
  router: connectRouter(history),
  posts
};

export default combineReducers(reducers);
