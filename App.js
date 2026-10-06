import { useState } from 'react';
import { signOut } from 'firebase/auth';

import AppNavigator from './src/navigation/AppNavigator';
import { auth } from './src/firebase';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  async function handleLogout() {
    await signOut(auth);
    setIsLoggedIn(false);
  }

  return (
    <AppNavigator
      isLoggedIn={isLoggedIn}
      onLogin={handleLogin}
      onLogout={handleLogout}
    />
  );
}
