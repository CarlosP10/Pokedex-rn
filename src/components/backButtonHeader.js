import {Avatar, Header, Icon} from 'react-native-elements';
import {TouchableOpacity, View} from 'react-native';

import {PrimaryText} from '@common';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const BackButtonHeader = ({
  title,
  backgroundColor,
  titleColor,
  rightComponent,
}) => {
  const navigation = useNavigation();

  const renderHeaderLeftComponent = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          type="font-awesome-5"
          name="arrow-left"
          color={titleColor || 'black'}
        />
      </TouchableOpacity>
    );
  };

  const renderHeaderCenterComponent = () => {
    return (
      <PrimaryText style={{color: titleColor || 'black'}}>{title}</PrimaryText>
    );
  };

  return (
    <Header
      containerStyle={{
        paddingTop: 0,
        paddingBottom: 10,

        height: 60,
      }}
      backgroundColor={backgroundColor || '#fff'}
      leftComponent={renderHeaderLeftComponent}
      centerComponent={renderHeaderCenterComponent}
      rightComponent={rightComponent}
    />
  );
};

export default BackButtonHeader;
