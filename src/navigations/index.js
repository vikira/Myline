import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AuthStack from './AuthStack';
import MainTab from './MainTab';

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <MainTab />
    </NavigationContainer>
  );
};

export default Navigation;
