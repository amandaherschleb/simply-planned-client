import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './utils/local-storage';
import { setAuthToken } from './containers/App/actions';
import simplyPlannedReducer from './reducers';

const store = createStore(
  combineReducers({
    app: simplyPlannedReducer,
    form: formReducer
  }),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;
