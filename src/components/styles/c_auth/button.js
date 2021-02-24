import {Dimensions, StyleSheet} from 'react-native';

import colors from '@common/colors';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    width:resize(300),
    borderRadius: resize(20),
    borderWidth: resize(0.4),
  },

  mainContainer: {
    width: resize(350),
    marginTop: resize(15),
    // alignItems:'center',
  },
  textStyle: {
    paddingVertical: resize(20),
    textAlign: 'center',
    
  },
});
