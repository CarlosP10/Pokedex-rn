import {Button, Icon} from 'react-native-elements';
import {Text, View} from 'react-native';

import {Colors} from '@common';
import NewPokemon from '@components/c_pokemons/pokemonCard';
import React from 'react';
import styles from '../styles/AddPokemon';

const AddPokemon = ({
  pokeName,
  iconName,
  title,
  onPress,
  mainStyle,
}) => {
  return (
    <View style={[styles.mainView, mainStyle]}>
      <NewPokemon
        imagen={pokeName.image}
        name={pokeName.name}
        id={pokeName.id}
        type={pokeName.type}
        height={pokeName.height}
        weight={pokeName.weight}
      />
      <Button
        icon={<Icon name={iconName} color={Colors.POKEMONDARKBLUE} />}
        titleStyle={styles.buttonsTitle}
        buttonStyle={styles.buttons_edit}
        title={title}
        onPress={onPress}
      />
    </View>
  );
};

export default AddPokemon;
