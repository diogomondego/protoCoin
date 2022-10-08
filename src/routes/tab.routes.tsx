import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import App from './app.routes';
import BottomBar from '../components/BottomBar';

const BottomNavigation = createBottomTabNavigator();

const DrawerLeftRoutes: React.FC = () => {
  return (
    <BottomNavigation.Navigator tabBar={props => <BottomBar {...props} />}>
      <BottomNavigation.Screen name="App" component={App} />
    </BottomNavigation.Navigator>
  );
};

export default DrawerLeftRoutes;
