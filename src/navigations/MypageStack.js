import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Mypage from '../screens/Mypage';
import Image from '../screens/Image';

const Stack = createStackNavigator();

const MainscreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Mypage" component={Mypage} />
      <Stack.Screen name="Image" component={Image} />
    </Stack.Navigator>
  );
};

export default MainscreenStack;
