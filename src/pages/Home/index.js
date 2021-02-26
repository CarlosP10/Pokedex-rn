import {Colors} from '@common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Regions from '@pages/Regions';
import Teams from '@pages/Teams';
// import Logout from '@pages/Logout';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Home = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <View flex={1}>
      <View flex={1}>
        <Tab.Navigator
          activeColor={Colors.accentColor}
          inactiveColor={Colors.accentColor}
          labeled={false}
          barStyle={{backgroundColor: Colors.primaryColor}}>
          <Tab.Screen
            lazy={true}
            name="Regions"
            component={Regions}
            options={{
              tabBarIcon: ({focused, color}) =>
                focused ? (
                  <Icon name={'plus-circle'} color={color} size={25} />
                ) : (
                  <Icon name={'plus-circle-outline'} color={color} size={25} />
                ),
            }}
          />
          <Tab.Screen
            lazy={true}
            name="Teams"
            component={Teams}
            options={{
              tabBarIcon: ({focused, color}) =>
                focused ? (
                  <Icon name={'account-group'} color={color} size={25} />
                ) : (
                  <Icon
                    name={'account-group-outline'}
                    color={color}
                    size={25}
                  />
                ),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Home;
