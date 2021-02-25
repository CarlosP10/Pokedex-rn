import {Text, View} from 'react-native';

import AuthRouter from './authRouter';
import Home from '@pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import PokemonRouter from './pokemonRouter';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonRouter">
        <Stack.Screen
          name="PokemonRouter"
          component={PokemonRouter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthRouter"
          component={AuthRouter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
