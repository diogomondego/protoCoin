import Dashboard from './src/pages/Dashboard';

import AppProvider from './src/hooks';

export default function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}