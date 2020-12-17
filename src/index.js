import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';

// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// sagas
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// reducer for storing search query
const searchString = (state = [], action) => {
  if (action.type === 'SET_RESULTS') {
    return action.payload;
  }
  return state;
};

function* watcherSaga() {
  yield takeEvery('SEARCH', searchGiphy);
}

function* searchGiphy(action) {
  console.log('in searchGiphy saga function.....');
  try {
    const response = yield axios.get('/api/search/' + action.payload.term);
    yield put({ type: 'SET_RESULTS', payload: response.data });
  } catch (error) {
    console.log('error with add fruit request.....', error);
    alert('something went wrong. please try again.');
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    searchString,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
