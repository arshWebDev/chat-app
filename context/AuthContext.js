import { createContext, useContext, useState } from "react";

import { auth, db } from "../config/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (username, email, password, setErrorEmail) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setErrorEmail(false);

      await setDoc(doc(db, "users", userCred.user.uid), {
        uid: userCred.user.uid,
        username: username,
        name: "",
        email: email,
        about: "",
        profilePic: "",
        chats: {},
      });

      return true;
    } catch (error) {
      if (error.message.includes("email")) {
        setErrorEmail("Email already in use");
      }

      return false;
    }
  };

  const login = async (email, password, setErrorEmail, setErrorPassword) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      setErrorEmail(false);
      setErrorPassword(false);

      return true;
    } catch (error) {
      console.log(error.message);
      if (error.message.includes("user")) {
        setErrorEmail("No user found with this email");
        setErrorPassword(false);
      } else if (error.message.includes("password")) {
        setErrorPassword("Wrong password");
        setErrorEmail(false);
      } else if (error.message.includes("internal")) {
        setErrorEmail("Internal error");
        setErrorPassword("Internal error");
      }

      return false;
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
