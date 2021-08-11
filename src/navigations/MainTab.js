import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Mainscreen from '../screens/Mainscreen';
import Mypage from '../screens/Mypage';
import Instagram from '../screens/Instagram';

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => {
          let name = '';
          if (route.name === 'Mainscreen') name = 'home-variant-outline';
          else if (route.name === 'Mypage') name = 'account-circle-outline';
          else name = 'instagram';
          return TabIcon({ ...props, name });
        },
      })}
    >
      <Tab.Screen name="Mainscreen" component={Mainscreen} />
      <Tab.Screen name="Mypage" component={Mypage} />
      <Tab.Screen name="Instagram" component={Instagram} />
    </Tab.Navigator>
  );
};

export default MainTab;
