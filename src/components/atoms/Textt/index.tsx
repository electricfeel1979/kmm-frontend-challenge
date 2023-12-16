import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export type TexttProps = TextProps;

const Textt: React.FC<TexttProps> = props => {
  const {style, children} = props;

  const text = (
    <Text {...props} style={[styles.default, style]}>
      {children}
    </Text>
  );

  return text;
};

export default Textt;

const styles = StyleSheet.create({
  default: {
    color: 'pink',
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
  },
});
