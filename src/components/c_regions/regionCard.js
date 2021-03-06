import {Colors, PrimaryText} from '@common';
import {Text, TouchableOpacity, View} from 'react-native';

import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import styles from '../styles/c_regions/regionCard';

const regionCard = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <LinearGradient
        colors={[
          Colors.POKEMONPASTELYELLOW,
          Colors.POKEMONLIGHTYELLOW,
        ]}
        style={styles.gradient}>
        <View style={styles.mainContainer}>
          <PrimaryText style={styles.textStyle}>{text} </PrimaryText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default regionCard;
