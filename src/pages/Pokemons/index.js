import {FlatList, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import RegionCard from '@components/c_regions/regionCard';
import styles from '@pages/Regions/styles/Regions';

const index = (props) => {
  const [poke, setPoke] = useState();
  
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const pokemons = await fetch(props.route.params.url, {
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
                  key: props.route.params.key,
                  update: props.route.params.update,
                  url: props.route.params.url,
                  team: props.route.params.team,
                  name: item.item.pokemon_species.name,
                  contador: props.route.params.contador,
                  pokemon1: props.route.params.pokemon1,
                  pokemon2: props.route.params.pokemon2,
                  pokemon3: props.route.params.pokemon3,
                  pokemon4: props.route.params.pokemon4,
                  pokemon5: props.route.params.pokemon5,
                  pokemon6: props.route.params.pokemon6,
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
