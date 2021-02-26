import AuthRouter from './authRouter';
import Home from '@pages/Home';
import LogOut from '@pages/LogOut';
import {NavigationContainer} from '@react-navigation/native';
import NewTeam from '@pages/NewTeam';
import PokemonDetail from '@pages/PokemonDetail';
import PokemonRouter from './pokemonRouter';
import Pokemons from '@pages/Pokemons';
import React from 'react';
import Regions from '@pages/Regions';
import SignIn from '@pages/SignIn';
import Start from '@pages/Start';
import Teams from '@pages/Teams';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const index = (props) => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{gestureEnabled: false}}>
        {isAuth ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
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
              name="NewTeam"
              component={NewTeam}
              options={{
                // headerShown: false,
                headerTitle: 'Nuevo Equipo',
                headerBackTitleVisible: false,
                headerTintColor: 'black',
                headerTitleStyle: {
                  textAlign: 'center',
                },
              }}
            />
            <Stack.Screen
              name="Pokemons"
              component={Pokemons}
              options={{
                // headerShown: false,
                headerTitle: 'Pokemons',
                headerBackTitleVisible: false,
                headerTintColor: 'black',
                headerTitleStyle: {
                  textAlign: 'center',
                },
              }}
            />
            <Stack.Screen
              name="PokemonDetail"
              component={PokemonDetail}
              options={{
                // headerShown: false,
                headerTitle: 'Detalle Pokemon',
                headerBackTitleVisible: false,
                headerTintColor: 'black',
                headerTitleStyle: {
                  textAlign: 'center',
                },
              }}
            />
            <Stack.Screen
              name="LogOut"
              component={LogOut}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>            
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Start"
              component={Start}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
