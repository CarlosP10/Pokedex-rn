/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {SafeAreaView, Text, View} from 'react-native';

import Navigator from '@routes';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
