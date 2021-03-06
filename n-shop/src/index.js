import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

import routes from './routers'
import { BrowserRouter as Router} from 'react-router-dom'

import NavigationBar from './components/navigationBar'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={ store }>
    <Router routes= { routes }>
      <NavigationBar />
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);
