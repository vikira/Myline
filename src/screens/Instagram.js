import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Instagram() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MainScreen Page</Text>
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
