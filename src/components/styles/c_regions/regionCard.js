import {Dimensions, StyleSheet} from 'react-native';

import colors from '@common/colors';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  mainView: {
    alignItems: 'center',
    marginHorizontal: resize(10),
    width: resize(175),
    height: resize(205),
  },

  mainContainer: {
    width: resize(165),
    height: resize(195),
    borderWidth: resize(0.5),
    borderRadius: resize(20),
    // alignItems:'center',
  },
  textStyle: {
    marginTop: resize(9),
    textAlign: 'center',
  },
});
