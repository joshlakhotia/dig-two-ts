import { createContext, useContext, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../firebase';

type AuthContextProviderProps = {
  children: React.ReactNode
}

type UserData = {
  email: string;
  password: string;
}

const UserContext = createContext<string | null>(null);

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserData>({email: '', password: ''});

  const createUser = (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  )
};

export const UserAuth = () => {
  return useContext(UserContext)
}