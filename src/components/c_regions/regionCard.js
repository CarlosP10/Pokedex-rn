import {Colors, PrimaryText} from '@common';
import {Text, View} from 'react-native';

import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient'
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/c_regions/regionCard';

const regionCard = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <LinearGradient colors={[Colors.LINEARGRADIENTGREEN.GREEN2, Colors.LINEARGRADIENTGREEN.GREEN1]} style={styles.gradient}>
        <View style={styles.mainContainer}>
          <PrimaryText style={styles.textStyle}>{text} </PrimaryText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default regionCard;
