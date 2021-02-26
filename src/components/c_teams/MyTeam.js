import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const MyTeam = ({imagen, name, id, type, height, weight}) => {
  return (
    <View>
      <Image source={{uri: imagen}} style={styles.pokemon_images} />
      <Text style={styles.data}>{name}</Text>
      <Text style={styles.data}>Number: {id}</Text>
      <Text style={styles.data}>Type: {type}</Text>
      <Text style={styles.data}>Height: {height}</Text>
      <Text style={styles.data}>Weight: {weight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemon_images: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 5,
    resizeMode: 'contain',
  },
  data: {
    fontSize: 16,
    textTransform: 'capitalize',
    marginTop: '3%',
    color: 'white',
    fontFamily: 'ComicNeue-Bold',
  },
});

export default MyTeam;
