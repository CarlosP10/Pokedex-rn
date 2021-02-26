import {Button, Icon} from 'react-native-elements';
import {Text, View} from 'react-native';

import {Colors} from '@common';
import NewPokemon from '@components/c_pokemons/pokemonCard';
import React from 'react';
import styles from '@pages/NewTeam/styles/AddPokemon';

const buttonLarge = ({iconName, title, onPress}) => {
  return (
    <Button
      icon={<Icon name={iconName} color={Colors.POKEMONDARKBLUE} />}
      titleStyle={styles.buttonsTitle}
      buttonStyle={styles.buttons_edit}
      title={title}
      onPress={onPress}
    />
  );
};

export default buttonLarge;
