import {Dimensions, StyleSheet} from 'react-native';

import colors from '@common/colors';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  mainView:{
    justifyContent:'center',
    marginHorizontal:resize(25),
    flexDirection:'row',
  },
  
  mainContainer: {
    width: resize(350),
    marginTop:resize(15),
    // alignItems:'center',
    
  },
  textStyle: {
    textAlign:'left',
    textDecorationLine:'underline',    
  },
});
