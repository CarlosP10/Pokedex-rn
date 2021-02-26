import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  button: {
    borderRadius: 8,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: Colors.POKEMONYELLOW,
    borderWidth: resize(4),
    borderColor: Colors.POKEMONBLUE,
    color: Colors.accentColor,
  },
  cardTitle: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontFamily: 'ComicNeue-Regular',
  },
  cardStyle:{borderRadius:25},
  textButtonStyle: {
    fontSize: 18,
    color: Colors.POKEMONDARKBLUE,
  },
});
