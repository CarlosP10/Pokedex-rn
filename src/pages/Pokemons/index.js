import {FlatList, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import RegionCard from '@components/c_regions/regionCard';
import styles from '@pages/Regions/styles/Regions';

const index = (props) => {
  const {params} = props.route;
  const [poke, setPoke] = useState();
  
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const pokemons = await fetch(params.url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resData = await pokemons.json();
      setPoke(resData.pokemon_entries);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escoge el Pokemon</Text>
      <FlatList
        numColumns={2}
        style={{flex: 1, marginVertical: 20}}
        columnWrapperStyle={styles.column}
        data={poke}
        keyExtractor={(item) => item.entry_number}
        renderItem={(item, i) => (
          <View style={styles.container}>
            <RegionCard
              text={item.item.pokemon_species.name}
              onPress={() => {
                props.navigation.navigate('PokemonDetail', {
                  key: params.key,
                  update: params.update,
                  url: params.url,
                  team: params.team,
                  name: item.item.pokemon_species.name,
                  contador: params.contador,
                  pokemon1: params.pokemon1,
                  pokemon2: params.pokemon2,
                  pokemon3: params.pokemon3,
                  pokemon4: params.pokemon4,
                  pokemon5: params.pokemon5,
                  pokemon6: params.pokemon6,
                });
              }}
            />
            {/* {console.log(item.item.entry_number)} */}
          </View>
      
        )}
      />
    </View>
  );
};

export default index;
