import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

export default function Image({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image Page</Text>
      <Text>ID: {route.params.id}</Text>
      <Text>Name: {route.params.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
