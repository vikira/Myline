import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const items = [
  { id: 1, name: 'first image' },
  { id: 2, name: 'second image' },
  { id: 3, name: 'third image' },
];

export default function Mypage({ navigation }) {
  const _onPress = (item) => {
    navigation.navigate('Image', { id: item.id, name: item.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mypage Page</Text>
      <Button
        title="go to Image page"
        onPress={() => navigation.navigate('Image')}
      />
      {items.map((item) => (
        <Button
          key={item.id}
          title={item.name}
          onPress={() => _onPress(item)}
        />
      ))}
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
