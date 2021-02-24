import {Text, View} from 'react-native';

import {PrimaryText} from '@common';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/c_pokemons/pokemonCard';

const pokemonCard = ({pokemonName, pokeNumber, pokeType,pokeDesc, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <View style={styles.imageContainer}></View>
      <View style={styles.mainContainer}>
        <PrimaryText style={styles.pokemonNameStyle}>
          {pokemonName} Hey
        </PrimaryText>
        <View style={styles.descViewStyle}>
          <PrimaryText style={styles.textStyle}>Numero: {pokeNumber} </PrimaryText>
          <PrimaryText style={styles.textStyle}>Tipo: {pokeType}</PrimaryText>
          <PrimaryText style={styles.textStyle}>Descripcion: {pokeDesc}</PrimaryText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default pokemonCard;
