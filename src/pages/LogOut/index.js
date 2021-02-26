import * as authActions from '@store/actions/auth';

import {Image, SafeAreaView, View} from 'react-native';

import ButtonAuth from '@components/c_auth/button';
import React from 'react';
import styles from '@pages/SignIn/styles/SignIn';
import {useDispatch} from 'react-redux';

const index = (props) => {
  const dispatch = useDispatch();
  const imageNew = '@assets/images/choose1.png';
  return (
    <View style={{flex: 1, paddingTop: 20, marginHorizontal: 15}}>
      <>
        <View style={[styles.mainContainer]}>
          <Image source={require(imageNew)} style={styles.pokeball} />
        </View>

        <View style={{alignItems:'center'}}>
          <ButtonAuth
            text="Log out"
            style={styles.buttonStyle}
            textStyle={styles.textButtonStyle}
            onPress={() => {
              dispatch(authActions.logout());
            }}
          />
        </View>
      </>
    </View>
  );
};

export default index;
