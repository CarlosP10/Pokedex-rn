import * as authActions from '@store/actions/auth';

import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';

const index = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        props.navigation.replace('SignIn');
        return;
      }
      const transformedData = JSON.parse(userData);
      const {token, userId, expiryDate} = transformedData;
      const expirationDate = new Date(expiryDate);

      if (expirationDate <= new Date() || !token || !userId) {
        props.navigation.replace('SignIn');
        return;
      }

      const expirationTime = expirationDate.getTime() - new Date().getTime();

      props.navigation.navigate('Start', {
        screen: 'Regions',
      });
      dispatch(authActions.authenticate(userId, token, expirationTime));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <View style={{flex: 1}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default index;
