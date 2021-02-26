import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: Colors.POKEMONBLUE,
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
  },
  container: {
    marginTop: 28,
    marginHorizontal: 15,
    backgroundColor: 'white',
  },
  direction: {
    flexDirection: 'row',
  },
  pokemon_images: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 3,
    resizeMode: 'contain',
  },
  data: {
    fontSize: 16,
    textTransform: 'capitalize',
    marginTop: '3%',
    color: 'white',
    fontWeight: 'bold',
  },
  buttons: {
    backgroundColor: Colors.POKEMONYELLOW,
    borderWidth: resize(4),
    borderColor: Colors.POKEMONBLUE,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonsTitle: {
    fontSize: 18,
    color: Colors.POKEMONDARKBLUE,
  },
  buttons_edit: {
    backgroundColor: Colors.POKEMONYELLOW,
    color: Colors.POKEMONBLUE,
    marginTop: 10,
    borderRadius: 10,
  },
  valueStyle: {
    textTransform: 'uppercase',
    alignSelf: 'center',
    color: Colors.POKEMONBLUE,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
