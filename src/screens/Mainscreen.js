import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Mainscreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MainScreen Page</Text>
      <Button
        title="go to Result page"
        onPress={() => navigation.navigate('Result')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Feebf2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
