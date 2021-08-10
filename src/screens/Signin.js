import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navigation from '../navigations';
import Signup from './Signup';

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signin Page</Text>
      <Button title="sign up" onPress={() => navigation.navigate('Signup')} />
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
