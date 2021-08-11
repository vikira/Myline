import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Mypage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mypage Page</Text>
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
