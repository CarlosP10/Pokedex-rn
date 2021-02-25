import {Dimensions, StyleSheet} from 'react-native';

import colors from '@common/colors';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  mainView: {
    alignItems: 'center',
    marginHorizontal: resize(10),
    marginVertical: resize(10),
    width: resize(175),
  },
  gradient: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  mainContainer: {
    width: resize(165),
    height: resize(130),
    // borderWidth: resize(0.5),
    borderRadius: resize(20),
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: resize(22),
    textTransform: 'capitalize',
    fontFamily: 'ComicNeue-Bold',
  },
});
