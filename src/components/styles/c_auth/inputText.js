import {Dimensions, StyleSheet} from 'react-native';

import colors from '@common/colors';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  mainView:{
    alignItems:'center',
    borderWidth:resize(0.4),
    marginHorizontal:resize(25),
    borderRadius:resize(20),    
  },
  
  mainContainer: {
    width: resize(350),
    marginTop:resize(15),
    // alignItems:'center',
    
  },
  textStyle: {
    textAlign:'left'
  },
  inputView: {
    // flex: 1,
    marginHorizontal:resize(10),
    alignItems: 'flex-start',
  },
});
