import { createContext, useContext, useState, useEffect } from "react";

import { auth, db } from "../config/firebase";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUserCred = (uid) => {
    const userRef = doc(db, "users", uid);

    const userCred = onSnapshot(userRef, (user) => {
      console.log({ ...user.data() });
    });

    userCred();
  };

  const createUserDoc = async (uid) => {
    console.log(uid);
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      username: username,
      name: "",
      email: email,
      about: "",
      profilePic: "",
      chats: {},
    });
  };

  const signUp = async (username, email, password, setErrorEmail) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setErrorEmail(false);
      await createUserDoc(userCred.user.uid);

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
      // getUserCred(userCred.user.uid);

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

  const googleAuth = async (form) => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout, googleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
