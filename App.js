/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {SafeAreaView, Text, View} from 'react-native';
import {applyMiddleware, combineReducers, createStore} from 'redux';

import Navigator from '@routes';
import {Provider} from 'react-redux';
import React from 'react';
import ReduxThunk from 'redux-thunk';
import authReducer from '@store/reducers/auth';
import {enableScreens} from 'react-native-screens';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

enableScreens();

export default function App(){ 
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}


