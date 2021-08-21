import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import Header from '../components'; 뭐가 문제일까!!!

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
      <Header />
      <View style={styles.content}>
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
    </View>
  );
}

//Header
export const Header = () => {
  return (
    <View style={styles.header}>
      {/* user 이름 */}
      <Text style={[styles.text, { margin: 20 }]}>Hello Yoojin!</Text>

      {/* 사진, 게시물, 친구 정보 */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text>photo</Text>
        <Text>게시물</Text>
        <Text>친구</Text>
      </View>

      {/* 버튼 2개 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 10,
        }}
      >
        <Button title="button1"></Button>
        <Button title="button2"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
    width: '100%', //꼭 넣어주어야 함
    backgroundColor: 'pink',
  },
  content: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
