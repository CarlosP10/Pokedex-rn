import {Button, Card, Icon} from 'react-native-elements';
import React, {useEffect, useState} from 'react';

import ButtonLarge from '@components/buttonLarge';
import {Colors} from '@common';
import {SafeAreaView} from 'react-native';
import pokemon from '@models/pokemon';
import styles from './styles/PokemonDetail'

const index = (props) => {
  const {params} = props.route;
  const [name, setName] = useState('');
  const [imagePokemon, setImagePokemon] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  const [id, setId] = useState();

  const [type, setType] = useState();
  const [listaIntegrantes, setListaIntegrantes] = useState();

  useEffect(() => {
    getDataPokemon();
    setListaIntegrantes(params.integrantes);
  }, []);

  useEffect(() => {
    const newPoke = new pokemon();
    newPoke.id = id;
    newPoke.name = name;
    newPoke.image = imagePokemon;
    newPoke.type = type;
    newPoke.height = height;
    newPoke.weight = weight;

    setListaIntegrantes(newPoke);
  }, [name]);

  const getDataPokemon = async () => {
    try {
      const pokemons = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const resData = await pokemons.json();

      setImagePokemon(resData.sprites.front_default);
      setWeight(resData.weight);
      setHeight(resData.height);
      setType(resData.types[0].type.name);
      setId(resData.id);
      setName(params.name);
    } catch (e) {
      setImagePokemon(
        'https://maestroselectronics.com/wp-content/uploads/bfi_thumb/blank-user-355ba8nijgtrgca9vdzuv4.jpg',
      );

      setWeight('No data');
      setHeight('No data');
      setType('No data');
      setId('No data');
      setName(params.name);
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <Card containerStyle={styles.cardStyle} >
        <Card.Title
          style={styles.cardTitle}>
          {name}
        </Card.Title>
        <Card.Divider style={{backgroundColor: Colors.POKEMONBLUE,}} />
        <Card.Image
          source={{uri: imagePokemon}}
          style={{
            resizeMode: 'contain',
          }}
        />
        <ButtonLarge 
        iconName="add"
        title=" Agregar Pokemon"
          onPress={() => {
            const aux = params.contador;
            if (aux === 1) {
              props.navigation.replace('NewTeam', {
                key: params.key,
                update: params.update,
                url: params.url,
                team: params.team,
                pokemon1: listaIntegrantes,
                pokemon2: params.pokemon2,
                pokemon3: params.pokemon3,
                pokemon4: params.pokemon4,
                pokemon5: params.pokemon5,
                pokemon6: params.pokemon6,
                contador: aux + 1,
              });
            }
            if (aux === 2) {
              props.navigation.replace('NewTeam', {
                key: params.key,
                update: params.update,
                url: params.url,
                team: params.team,
                pokemon1: params.pokemon1,
                pokemon2: listaIntegrantes,
                pokemon3: params.pokemon3,
                pokemon4: params.pokemon4,
                pokemon5: params.pokemon5,
                pokemon6: params.pokemon6,
                contador: aux + 1,
              });
            }
            if (aux === 3) {
              props.navigation.replace('NewTeam', {
                key: params.key,
                update: params.update,
                url: params.url,
                team: params.team,
                pokemon1: params.pokemon1,
                pokemon2: params.pokemon2,
                pokemon3: listaIntegrantes,
                pokemon4: params.pokemon4,
                pokemon5: params.pokemon5,
                pokemon6: params.pokemon6,
                contador: aux + 1,
              });
            }
            if (aux === 4) {
              props.navigation.replace('NewTeam', {
                key: params.key,
                update: params.update,
                url: params.url,
                team: params.team,
                pokemon1: params.pokemon1,
                pokemon2: params.pokemon2,
                pokemon3: params.pokemon3,
                pokemon4: listaIntegrantes,
                pokemon5: params.pokemon5,
                pokemon6: params.pokemon6,
                contador: aux + 1,
              });
            }
            if (aux === 5) {
              props.navigation.replace('NewTeam', {
                key: params.key,
                update: params.update,
                url: params.url,
                team: params.team,
                pokemon1: params.pokemon1,
                pokemon2: params.pokemon2,
                pokemon3: params.pokemon3,
                pokemon4: params.pokemon4,
                pokemon5: listaIntegrantes,
                pokemon6: params.pokemon6,
                contador: aux + 1,
              });
            }
            if (aux === 6) {
              props.navigation.replace('NewTeam', {
                key: params.key,
                update: params.update,
                url: params.url,
                team: params.team,
                pokemon1: params.pokemon1,
                pokemon2: params.pokemon2,
                pokemon3: params.pokemon3,
                pokemon4: params.pokemon4,
                pokemon5: params.pokemon5,
                pokemon6: listaIntegrantes,
                contador: aux + 1,
              });
            }
          }}
        />
      </Card>
    </SafeAreaView>
  );
};

export default index;
