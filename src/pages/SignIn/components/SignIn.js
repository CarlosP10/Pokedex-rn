import {Image, Text, View} from 'react-native';

import AuthText from '@components/c_auth/authText';
import Button from '@components/c_auth/button';
import {Constants} from '@common';
import InputText from '@components/c_auth/inputText';
import React from 'react';
import styles from '../styles/SignIn';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  const imageNew = '@assets/images/choose1.png';
  return (
    <View style={styles.main}>
      <View>
        <View style={[styles.mainContainer]}>
          <Image source={require(imageNew)} style={styles.pokeball} />
        </View>
        <View style={styles.mainContainer}>
          <InputText text={Constants.AUTH.USUARIO} />
        </View>
        <View style={styles.mainContainer}>
          <InputText text={Constants.AUTH.PASS} />
        </View>
        <View style={styles.mainContainer}>
          <Button
            text={Constants.AUTH.SIGNIN}
            onPress={() => navigation.navigate('Home')}
            style={styles.buttonStyle}
            textStyle={styles.textButtonStyle}
          />
        </View>
        <View style={[styles.mainContainer, {alignItems: 'center'}]}>
          <Text>
            <AuthText
              text1="No tienes una cuenta?"
              text2={Constants.AUTH.SIGNUP}
              onPress={() => navigation.navigate('SignUp')}
            />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
