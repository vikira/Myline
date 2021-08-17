import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Mypage from '../screens/Mypage';
import InstaDrawer from './InstaDrawer';
import MainscreenStack from './MainscreenStack';
// import Instagram from '../screens/Instagram';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'pink', //터치시 배경
        tabBarActiveTintColor: 'black', //터치시 글자색
        tabBarInactiveTintColor: 'black', //비터치시 글자색
        headerTitleAlign: 'center', //헤더 타이틀 가운데정렬
      }}
    >
      <Tab.Screen
        name="MainscreenD"
        component={MainscreenStack}
        options={{
          headerShown: false,
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: props.focused ? 'home-variant' : 'home-variant-outline',
            }),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: props.focused ? 'account-circle' : 'account-circle-outline',
            }),
        }}
      />
      <Tab.Screen
        name="InstagramD"
        component={InstaDrawer}
        options={{
          headerShown: false,
          tabBarIcon: (props) => TabIcon({ ...props, name: 'instagram' }),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
