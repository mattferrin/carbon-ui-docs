import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { navigation, attachHistoryModifiers } from 'react-stack-nav'
import { BackAndroid } from 'react-native'

import app from './modules/duck'

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({ app, navigation })

export default (initialState = { navigation: { index: 0, history: [{ stateObj: {}, title: 'Installation', url: '/installation' }] } }) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
      attachHistoryModifiers({ BackAndroid }),
    ),
  )
