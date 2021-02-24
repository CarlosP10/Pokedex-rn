import {Dimensions, StyleSheet} from 'react-native';

import colors from '@common/colors';
import {resize} from '@utils/resize';

var {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainView: {
    alignItems: 'center',
    // marginHorizontal: resize(15),
  },

  mainContainer: {
    width: resize(width+20),
    height: resize(89),
    borderWidth: resize(0.5),
    borderRadius: resize(20),
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:resize(20),
    // justifyContent:'center',
  },
  nameViewStyle: {
    // marginLeft:resize(10),
    flex:1,
    alignContent:'flex-start',
  },
  numberViewStyle: {
    flex:1,
    // marginRight:resize(10),    
    alignContent:'flex-end',    
  },
  nameStyle: {
    // marginLeft:resize(20),
    textAlign: 'left',
  },
  numberStyle: {
    // marginRight:resize(20),
    textAlign: 'right',
  },
});
