import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../screens/DrawerContent';
import Instagram from '../screens/Instagram';

const Drawer = createDrawerNavigator();

const InstaDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{ headerTitleAlign: 'center' }}
    >
      <Drawer.Screen name="Instagram" component={Instagram} />
    </Drawer.Navigator>
  );
};

export default InstaDrawer;
