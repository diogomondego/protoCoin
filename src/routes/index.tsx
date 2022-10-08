import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}