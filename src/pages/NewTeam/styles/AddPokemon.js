import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    borderRadius: 10,
    // backgroundColor: '',
    // borderWidth: resize(4),
    // borderColor: Colors.POKEMONBLUE,
    // borderBottomWidth:0,
    marginVertical:resize(18),
    marginHorizontal:resize(26),
  },
  buttons: {
    backgroundColor: Colors.POKEMONYELLOW,
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
    borderWidth: resize(4),
    borderColor: Colors.POKEMONBLUE,
    marginTop: 10,
    borderRadius: 10,
  },
});
