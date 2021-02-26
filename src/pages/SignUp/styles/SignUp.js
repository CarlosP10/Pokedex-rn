import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  main: {
    marginTop: resize(20),
    justifyContent: 'center',
  },
  pokeball: {
    width: resize(200),
    height: resize(100),
    marginVertical: resize(10),
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginBottom: 10,
  },
  mainView: {
    justifyContent: 'center',
    marginHorizontal: resize(25),
    flexDirection: 'row',
  },

  mainContainer: {
    marginVertical: resize(20),
  },
  buttonStyle: {
    backgroundColor: Colors.POKEMONYELLOW,
    borderWidth: resize(4),
    borderColor: Colors.POKEMONBLUE,
  },
  textButtonStyle: {
    fontSize: 18,
    color: Colors.POKEMONDARKBLUE,
  },
});
