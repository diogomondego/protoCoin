import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from '../pages/LogIn';
import Dashboard from '../pages/Dashboard';

const StackNavigator = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen
      name="LogIn"
      component={LogIn}
      options={{
        headerShown: false,
      }}
    />

    <StackNavigator.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        headerShown: false,
      }}
    />
  </StackNavigator.Navigator>
);

export default AppRoutes;
