import * as authActions from '@store/actions/auth';

import {ActivityIndicator, Alert, Image, ScrollView, View} from 'react-native';
import React, {useCallback, useEffect, useReducer, useState} from 'react';

import ButtonAuth from '@components/c_auth/button';
import Card from '@components/Card';
import {Colors} from '@common';
import Input from '@components/Input';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import styles from '../styles/SignIn';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const Login = props => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An error Ocurred!', error.message, [{text: 'Okay'}]);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    if (isSignup) {
      action = authActions.signup(
        formState.inputValues.email,
        formState.inputValues.password,
      );
    } else {
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password,
      );
    }

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      navigation.navigate('Home');
    } catch (err) {
      setError(err);

      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );
  const imageNew = '@assets/images/choose1.png';
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={[
          Colors.POKEMONYELLOW,
          Colors.POKEMONDARKBLUE,
          Colors.POKEMONDARKBLUE,
          Colors.POKEMONYELLOW,
        ]}
        style={styles.gradient}>
        <Card style={styles.authContainer}>
          <Image source={require(imageNew)} style={styles.pokeball} />

          <ScrollView>
            <Input
              id="email"
              label="Correo "
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
              initialValue=""
            />

            <Input
              id="password"
              label="Contraseña"
              keyboardType="default"
              secureTextEntry
              minLength={5}
              required
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.primaryColor} />
              ) : (
                <ButtonAuth
                  text={isSignup ? 'Registrarse' : 'Iniciar Sesion'}
                  style={styles.buttonStyle}
                  textStyle={styles.textButtonStyle}
                  onPress={authHandler}
                />
              )}
            </View>
            <View style={styles.buttonContainer}>
              <ButtonAuth
                text={`Cambiar a ${isSignup ? 'Iniciar Sesion' : 'Registrarse'} `}
                onPress={() => {
                  setIsSignup((prevState) => !prevState);
                }}
                style={styles.buttonStyle}
                textStyle={styles.textButtonStyle}
              />
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </View>
  );
};

Login.navigationOptions = {
  headerShown: false,
};

export default Login;
