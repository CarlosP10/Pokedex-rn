import {Button, Icon} from 'react-native-elements';
import {Colors, Constants} from '@common';
import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

import AddPokemon from './components/AddPokemon';
import NewPokemon from '@components/c_pokemons/pokemonCard';
import styles from './styles/NewTeam';

// import {useSelector} from 'react-redux';

const index = (props) => {
  const {params} = props.route;
  const [value, onChangeValue] = useState(params.team);
  // const isAuth = useSelector(state => state.auth.token);
  // const user = useSelector(state=>state.auth.userId)
  let pokemon1 = undefined;
  let pokemon2 = undefined;
  let pokemon3 = undefined;
  let pokemon4 = undefined;
  let pokemon5 = undefined;
  let pokemon6 = undefined;
  let regions = params.url;
  if (params.flag === true) {
  }
  if (
    params.flag === false ||
    params.flag === undefined
  ) {
    pokemon1 = params.pokemon1;
    pokemon2 = params.pokemon2;
    pokemon3 = params.pokemon3;
    pokemon4 = params.pokemon4;
    pokemon5 = params.pokemon5;
    pokemon6 = params.pokemon6;
  }
  const updateTeam = async (id) => {
    try {
      const pokemons = await fetch(
        `https://pokelanin-default-rtdb.firebaseio.com/teams/${id}.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pokemon1,
            pokemon2,
            pokemon3,
            pokemon4,
            pokemon5,
            pokemon6,
            team: value,
            region: regions,
          }),
        },
      );
      const resData = await pokemons.json();
      props.navigation.replace('Home');
    } catch (e) {
      console.log(e);
    }
  };

  const sendData = async () => {
    try {
      const pokemons = await fetch(
        `https://pokelanin-default-rtdb.firebaseio.com/teams.json`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pokemon1,
            pokemon2,
            pokemon3,
            pokemon4,
            pokemon5,
            pokemon6,
            team: value,
            region: regions,
          }),
        },
      );
      const resData = await pokemons.json();
      props.navigation.replace('Home');
    } catch (e) {
      console.log(e);
    }
  };

  const propsNavigate = (props, valor, a) => {
    props.navigation.navigate('Pokemons', {
      key: params.key,
      update: params.update,
      team: valor,
      url: params.url,
      contador: a,
      pokemon1: pokemon1,
      pokemon2: pokemon2,
      pokemon3: pokemon3,
      pokemon4: pokemon4,
      pokemon5: pokemon5,
      pokemon6: pokemon6,
    });
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeValue(text)}
            value={value}
            placeholder={Constants.TEAM.NAMETEAM}
            placeholderTextColor="#8a9599"
          />
          <Text style={styles.valueStyle}>{value}</Text>
          <View>
            {pokemon1 && (
              <AddPokemon
                pokeName={pokemon1}
                title="Editar"
                iconName="edit"
                onPress={() => {
                  propsNavigate(props, value, 1);
                }}
              />
            )}
            {pokemon2 && (
              <AddPokemon
                pokeName={pokemon2}
                title="Editar"
                iconName="edit"
                onPress={() => {
                  propsNavigate(props, value, 2);
                }}
              />
            )}
            {pokemon3 && (
              <AddPokemon
                pokeName={pokemon3}
                title="Editar"
                iconName="edit"
                onPress={() => {
                  propsNavigate(props, value, 3);
                }}
              />
            )}
            {pokemon4 && (
              <AddPokemon
                pokeName={pokemon4}
                title="Editar"
                iconName="edit"
                onPress={() => {
                  propsNavigate(props, value, 4);
                }}
              />
            )}
            {pokemon5 && (
              <AddPokemon
                pokeName={pokemon5}
                iconName="edit"
                title="Editar"
                onPress={() => {
                  propsNavigate(props, value, 5);
                }}
              />
            )}
            {pokemon6 && (
              <AddPokemon
                pokeName={pokemon6}
                iconName="edit"
                title=" Edit"
                onPress={() => {
                  propsNavigate(props, value, 6);
                }}
              />
            )}

            {params.pokemon6 === undefined && (
              <View>
                <Button
                  icon={<Icon name="add" color={Colors.POKEMONDARKBLUE} />}
                  titleStyle={styles.buttonsTitle}
                  buttonStyle={styles.buttons}
                  title="Agregar pokemon"
                  onPress={() => {
                    if (pokemon1 === undefined) {
                      props.navigation.navigate('Pokemons', {
                        key: params.key,
                        update: params.update,
                        team: value,
                        url: params.url,
                        contador: 1,
                        pokemon1: pokemon1,
                      });
                    } else if (pokemon2 === undefined) {
                      props.navigation.navigate('Pokemons', {
                        key: params.key,
                        update: params.update,
                        team: value,
                        url: params.url,
                        contador: 2,
                        pokemon1: pokemon1,
                        pokemon2: pokemon2,
                      });
                    } else if (pokemon3 === undefined) {
                      props.navigation.navigate('Pokemons', {
                        key: params.key,
                        update: params.update,
                        team: value,
                        url: params.url,
                        contador: 3,
                        pokemon1: pokemon1,
                        pokemon2: pokemon2,
                        pokemon3: pokemon3,
                      });
                    } else if (pokemon4 === undefined) {
                      props.navigation.navigate('Pokemons', {
                        key: params.key,
                        update: params.update,
                        team: value,
                        url: params.url,
                        contador: 4,
                        pokemon1: pokemon1,
                        pokemon2: pokemon2,
                        pokemon3: pokemon3,
                        pokemon4: pokemon4,
                      });
                    } else if (pokemon5 === undefined) {
                      props.navigation.navigate('Pokemons', {
                        key: params.key,
                        update: params.update,
                        team: value,
                        url: params.url,
                        contador: 5,
                        pokemon1: pokemon1,
                        pokemon2: pokemon2,
                        pokemon3: pokemon3,
                        pokemon4: pokemon4,
                        pokemon5: pokemon5,
                      });
                    } else if (pokemon6 === undefined) {
                      props.navigation.navigate('Pokemons', {
                        key: params.key,
                        update: params.update,
                        team: value,
                        url: params.url,
                        contador: 6,
                        pokemon1: pokemon1,
                        pokemon2: pokemon2,
                        pokemon3: pokemon3,
                        pokemon4: pokemon4,
                        pokemon5: pokemon5,
                        pokemon6: pokemon6,
                      });
                    }
                  }}
                />
              </View>
            )}
            {params.update === false && pokemon3 && (
              <Button
                icon={<Icon name="save" color="#ffffff" />}
                buttonStyle={styles.buttons}
                title={Constants.TEAM.SAVET}
                onPress={sendData}
              />
            )}
            {params.update === true && (
              <Button
                icon={<Icon name="update" color="#ffffff" />}
                buttonStyle={styles.buttons}
                title={Constants.TEAM.UPDATET}
                onPress={() => {
                  updateTeam(params.key);
                }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
