import { createContext, useContext, useState, useEffect } from "react";

import { auth, db } from "../config/firebase";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { doc, setDoc, onSnapshot, updateDoc } from "firebase/firestore";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user);

  // useEffect(() => {
  //   onSnapshot()
  // }, [])

  const getUserCred = (uid) => {
    // const userRef = doc(db, "users", uid);

    // const userCred = onSnapshot(userRef, (fetchedData) => {
    //   console.log({ ...fetchedData.data() });
    //   setUser({ ...fetchedData.data() });
    // });

    // userCred();
  };

  const createUserDoc = async (uid, username, email) => {
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      username: username,
      name: "",
      email: email,
      about: "",
      profilePic: "",
      chats: {},
    });

    setUser(uid);
    localStorage.setItem("uid", uid);

    return true;
  };

  const signUp = async (username, email, password, setErrorEmail) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setErrorEmail(false);
      await createUserDoc(userCred.user.uid, username, email);
      getUserCred(userCred.user.uid);

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

  const updateDetails = async (name, about) => {
    console.log("Nothing's here");
    // console.log("Working! Yeah!");

    // console.log(user);
    // // const userRef = doc(db, "users", user);

    await updateDoc( doc(db, "users", (user ?? localStorage.getItem("uid"))), {
      "name": name,
      "about": about,      
    })

    // // return ;
  };

  return (
    <AuthContext.Provider
      value={{ user, signUp, login, logout, googleAuth, updateDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
