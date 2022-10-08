import { StatusBar } from 'expo-status-bar';

import AppProvider from './src/hooks';
import AppRoutes from './src/routes';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <AppProvider>
      <StatusBar style='light' />
      <AppRoutes />
      <Toast />
    </AppProvider>
  );
}