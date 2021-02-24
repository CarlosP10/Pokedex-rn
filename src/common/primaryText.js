import {StyleSheet, Text} from 'react-native';

import React from 'react';

const PrimaryText = (props) => {
  const styles = StyleSheet.create({
    text: {
      // fontFamily: `Poppins-${props.type ? props.type : 'Regular'}`,
    },
  });
  return (
    <Text
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      onTextLayout={props.onTextLayout}
      style={[props.style, styles.text]}
      ellipsizeMode="tail">
      {props.children}
    </Text>
  );
};

export default PrimaryText;
