import {Text, View} from 'react-native';

import {PrimaryText} from '@common';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/c_auth/authText';

const authText = ({text1, text2, onPress}) => {
  return (
    <View style={styles.mainView}>
      <PrimaryText>{text1} </PrimaryText>
      <TouchableOpacity onPress={onPress}>
        <PrimaryText style={styles.textStyle}>{text2}</PrimaryText>
      </TouchableOpacity>
    </View>
  );
};

export default authText;
