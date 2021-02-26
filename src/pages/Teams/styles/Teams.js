import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';
import {resize} from '@utils/resize';

export default StyleSheet.create({
  mainTitle: {
    alignSelf: 'center',
    fontSize: 17,
    marginTop: 10,
    fontFamily: 'ComicNeue-Bold',
  },
  flatListStyle: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  teamTitle: {alignSelf: 'center', color:'black'},
  viewFlat: {
    flex: 1,
    borderRadius: 10,
    // backgroundColor: '#F58712',
    borderWidth: resize(4),
    borderColor: Colors.POKEMONBLUE,
    borderBottomWidth:resize(1),
    marginBottom: 10,
  },
  viewWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
  },
  container: {
    marginTop: 8,
    marginHorizontal: 15,
    backgroundColor: 'white',
  },
  direction: {
    flexDirection: 'row',
  },
  pokemon_images: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 5,
    resizeMode: 'contain',
  },
  data: {
    fontSize: 16,
    textTransform: 'capitalize',
    marginTop: '3%',
    color: 'black',
    fontWeight: 'bold',
  },
  buttons: {
    backgroundColor: Colors.primaryColor,
    color: Colors.accentColor,
    marginTop: 10,
    borderRadius: 10,
  },
  buttons_edit: {
    backgroundColor: Colors.primaryColor,
    color: Colors.accentColor,
    marginTop: 10,
    borderRadius: 10,
  },
});
