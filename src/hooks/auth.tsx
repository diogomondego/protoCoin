import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from 'react';
import Toast from 'react-native-toast-message';

import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import firebase from '../services/firebase'

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserInfo {
  email: string;
}

interface AuthContextData {
  userInfo: UserInfo;
  setUserInfo: Function;
  authenticated: boolean;
  signUp(credentials: SignInCredentials): Promise<UserInfo>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
  const [authenticated, setAuthenticated] = useState(false);

  const myApp = initializeApp(firebase);

  const auth = getAuth(myApp);

  const signUp = useCallback(async ({ email, password }) => {
    console.log(email)
      const response = await createUserWithEmailAndPassword(auth, email, password)
      Toast.show({
        type: 'success',
        text1: 'Você foi autenticado com sucesso',
      });
      const user = response.user
      return user
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        authenticated,
        signUp,
        setUserInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within on AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
