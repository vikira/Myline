import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Instagram() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instagram Page</Text>
    </View>
  );
}

const MyText = styled.Text`
  color: #fff;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
