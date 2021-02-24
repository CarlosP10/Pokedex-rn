import {Text, View} from 'react-native';

import {Input} from 'react-native-elements';
import {PrimaryText} from '@common';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/c_regions/regionCard';

const regionCard = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <View style={styles.mainContainer}></View>
      <PrimaryText style={styles.textStyle}>{text} </PrimaryText>
    </TouchableOpacity>
  );
};

export default regionCard;
