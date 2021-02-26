import {Text, View} from 'react-native';

import {PrimaryText} from '@common';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/c_auth/button';

const button = ({text, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.mainView, style]} onPress={onPress}>
      <PrimaryText style={[styles.textStyle, textStyle]}>{text}</PrimaryText>
    </TouchableOpacity>
  );
};

export default button;
