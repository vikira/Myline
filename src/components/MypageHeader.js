import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Hello Yoojin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
