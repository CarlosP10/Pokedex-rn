import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';
import {resize} from '@utils/resize';

export default StyleSheet.create({
    pokemon_images: {
      width: Dimensions.get('window').width / 4,
      height: Dimensions.get('window').width / 5,
      resizeMode: 'contain',
    },
    mainView:{ alignItems:'center'},
    data: {
      fontSize: 16,
      textTransform: 'capitalize',
      marginTop: '3%',
      color: 'black',
      fontFamily: 'ComicNeue-Bold',
    },
  });