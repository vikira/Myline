import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mainscreen from '../screens/Mainscreen';
import Mypage from '../screens/Mypage';
import Instagram from '../screens/Instagram';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mainscreen" component={Mainscreen} />
      <Tab.Screen name="Mypage" component={Mypage} />
      <Tab.Screen name="Instagram" component={Instagram} />
    </Tab.Navigator>
  );
};

export default MainTab;
