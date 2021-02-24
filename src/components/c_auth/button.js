import {Text, View} from 'react-native';

import {PrimaryText} from '@common';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/c_auth/button';

const button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <PrimaryText style={styles.textStyle}>{text}</PrimaryText>
    </TouchableOpacity>
  );
};

export default button;
