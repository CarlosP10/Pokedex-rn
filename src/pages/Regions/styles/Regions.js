import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';
import {resize} from '@utils/resize';

export default StyleSheet.create({
    container: {
      marginTop: 10,
      marginLeft: 10,
      flex: 1,
      marginRight: 10,
      height: 100,
      marginBottom: 8,
      borderRadius: 10,
      backgroundColor: 'white',
    },
    card: {
      flex: 1,
    },
    region_name: {
      color: 'white',
      textAlign: 'center',
      fontSize: 15,
      textTransform: 'capitalize',
      fontFamily: 'ComicNeue-Bold',
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    pokeball: {
      width: resize(200),
      height: resize(100),
      marginVertical: resize(10),
      resizeMode: 'stretch',
      alignSelf: 'center',
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      alignSelf: 'center',
      fontFamily: 'ComicNeue-Bold',
    },
  });