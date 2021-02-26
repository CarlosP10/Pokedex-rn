import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  main: {
    justifyContent: 'center',
    marginTop: resize(20),
  },
  mainView: {
    justifyContent: 'center',
    marginHorizontal: resize(25),
    flexDirection: 'row',
  },
  pokeball: {
    width: resize(200),
    height: resize(100),
    marginVertical: resize(10),
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginBottom: 10,
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
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    width: '83%',
    height:'90%',
    maxWidth: 400,
    padding: 20,
    maxHeight: 500,
    justifyContent:'space-between',
  },
  buttonContainer: {
    marginTop: resize(30),
    marginBottom:0,
  },
});
