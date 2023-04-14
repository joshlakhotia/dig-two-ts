import { createContext, useContext, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User,
  UserCredential
} from 'firebase/auth';
import firebase from 'firebase/app';
import { auth } from '../firebase';

type AuthContextProviderProps = {
  children: React.ReactNode
}

interface ValueUser {
  createUser?: (email: string, password: string) => Promise<UserCredential>
  user?: User | null
  logout?: () => Promise<void>
  signIn?: (email: string, password: string) => Promise<UserCredential>
}
const userContext = createContext<ValueUser>({});

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>();

  const createUser = async (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = async () => {
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

  const valueUser = { createUser, user, logout, signIn}
  return (
    <userContext.Provider value={valueUser}>
      {children}
    </userContext.Provider>
  )
};

export const useUserAuth = () => {
  return useContext(userContext)
}

/** 
function Imaginary () {
  const valueUser = useUserAuth()
  console.log('valueUser.user test:', valueUser.data?.x)
  return <></>
}

*/