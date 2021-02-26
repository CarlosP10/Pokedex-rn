import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import styles from '../styles/c_teams/myTeam';

const MyTeam = ({pokeName}) => {
  return (
    <View style={styles.mainView}>
      <Image source={{uri: pokeName.image}} style={styles.pokemon_images} />
      <Text style={styles.data}>
        {pokeName.id} -- {pokeName.name}
      </Text>
      <Text style={styles.data}>Tipo: {pokeName.type}</Text>
    </View>
  );
};

export default MyTeam;
