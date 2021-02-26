import {Image, Text, View} from 'react-native';

import {Constants} from '@common';
import {PrimaryText} from '@common';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/c_pokemons/pokemonCard';

const pokemonCard = ({name, id, type, weight, height, imagen,onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imagen}} style={styles.pokemon_images} />
      </View>
      <View style={styles.mainContainer}>
        <PrimaryText style={styles.pokemonNameStyle}>{name}</PrimaryText>
        <View style={styles.descViewStyle}>
          <PrimaryText style={styles.textStyle}>
            {Constants.POKEMON.NUMBER} {id}{' '}
          </PrimaryText>
          <PrimaryText style={styles.textStyle}>
            {Constants.POKEMON.TYPE} {type}
          </PrimaryText>
          <PrimaryText style={styles.textStyle}>
            {Constants.POKEMON.DESCRIPCION} {Constants.POKEMON.WEIGHT}
            {weight}
            {Constants.POKEMON.HEIGHT}
            {height}
          </PrimaryText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default pokemonCard;
