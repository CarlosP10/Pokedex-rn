import {Dimensions, StyleSheet} from 'react-native';

import colors from '@common/colors';
import {resize} from '@utils/resize';

var {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainView: {
    // alignItems: 'center',
    justifyContent:'center',
    marginHorizontal: resize(10),
    // marginHorizontal: resize(15),
    flexDirection: 'row',
  },

  imageContainer: {
    width: resize(150),
    height: resize(200),
    borderWidth: resize(0.5),
    borderRadius: resize(20),
    marginHorizontal: resize(10),
    alignItems: 'center',
    paddingHorizontal: resize(20),
    // justifyContent:'center',
  },

  mainContainer: {
    width: resize(240),
    height: resize(200),
    borderWidth: resize(0.5),
    borderRadius: resize(20),
    marginHorizontal: resize(10),
    // flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal: resize(20),
    // justifyContent:'center',
  },
  descViewStyle: {
    // marginLeft:resize(10),
    // flex: 1,
    alignSelf: 'flex-start',
  },
  pokemonNameStyle: {    
    marginTop:resize(10),
    textAlign: 'center',
  },
  textStyle:{
      marginVertical:resize(4),
      textAlign:'left',
  },
});
