import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//임시 목록
const items = [
  { id: 1, name: 'first image' },
  { id: 2, name: 'second image' },
  { id: 3, name: 'third image' },
];

export default function Mypage({ navigation }) {
  //화면 이동 시 객체로 정보 전달
  const _onPress = (item) => {
    navigation.navigate('Image', { id: item.id, name: item.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mypage Page</Text>

      {/* 항목 수 만큼 버튼 생성 */}
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
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
