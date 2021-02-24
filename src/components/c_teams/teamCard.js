import {Text, View} from 'react-native';

import {PrimaryText} from '@common';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/c_teams/teamCard';

const teamCard = ({teamName, teamMembers, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <View style={styles.mainContainer}>
        <View style={styles.nameViewStyle}>
          <PrimaryText style={styles.nameStyle}>{teamName} </PrimaryText>
        </View>
        <View style={styles.numberViewStyle}>
          <PrimaryText style={styles.numberStyle}>{teamMembers}</PrimaryText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default teamCard;
