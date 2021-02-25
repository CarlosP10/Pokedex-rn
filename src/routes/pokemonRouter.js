import PokemonDetail from '@pages/PokemonDetail';
import Pokemons from '@pages/Pokemons';
import React from 'react';
import Regions from '@pages/Regions';
import Teams from '@pages/Teams';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const PokemonRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Regions">
      <Stack.Screen
        name="Regions"
        component={Regions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Teams"
        component={Teams}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pokemons"
        component={Pokemons}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PokemonRouter;
