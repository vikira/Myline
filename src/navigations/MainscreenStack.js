import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Mainscreen from '../screens/Mainscreen';
import Result from '../screens/Result';

const Stack = createStackNavigator();

const MainscreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Mainscreen" component={Mainscreen} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

export default MainscreenStack;
