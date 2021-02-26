import {FlatList, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Constants} from '@common';
import RegionCard from '@components/c_regions/regionCard';
import styles from '../styles/Regions';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Regions = props => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const navigation = useNavigation()
  useEffect(() => {
    if (!isAuth) {
      navigation.replace('SignIn');
    }
  }, [isAuth]);
  const [regiones, setRegiones] = useState();
  useEffect(() => {
    getRegions();
  }, []);
  const getRegions = async () => {
    try {
      const regions = await fetch('https://pokeapi.co/api/v2/pokedex', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resData = await regions.json();
      setRegiones(resData.results);
    } catch (e) {
      console.log(e);
    }
  };
  const imageNew = '@assets/images/choose1.png';
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.container}>
        <Image source={require(imageNew)} style={styles.pokeball} />

        <Text style={styles.title}>{Constants.TEAM.TITLE}</Text>
        <FlatList
          numColumns={2}
          style={{flex: 1, marginVertical: 20}}
          columnWrapperStyle={styles.column}
          data={regiones}
          keyExtractor={(item) => item.name}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          windowSize={5}
          renderItem={(item, i) => (
            <View style={styles.container}>
              <RegionCard
                text={item.item.name}
                onPress={() => {
                  navigation.navigate('NewTeam', {
                    flag: true,
                    url: item.item.url,
                    update: false,
                    contador: 1,
                    region: item.item.name,
                  });
                }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Regions;
