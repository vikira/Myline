import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AuthStack from './AuthStack';
import MainTab from './MainTab';
// import InstaDrawer from './InstaDrawer';

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <MainTab />
    </NavigationContainer>
  );
};

export default Navigation;
