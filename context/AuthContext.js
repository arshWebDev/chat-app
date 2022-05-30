import {createContext, useContext, useState, useEffect} from 'react';

import { signOut } from 'firebase/auth';

import { auth } from  '../config/firebase';;

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);

  const  logout = async () => {
    await signOut(auth);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
export { useAuth };