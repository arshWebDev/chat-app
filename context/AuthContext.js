import { createContext, useContext, useState, useEffect } from "react";

import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../config/firebase";

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

      console.log(userCred.user.uid);

      db.collection("users").doc(userCred.user.uid).set({
        username: username,
        name: "",
        email: email,
        about: "",
        profilePic: "",
        chats: {},
      });

      return true;
    } catch (error) {
      console.log(error.message);

      if (error.message.includes("email")) {
        setErrorEmail("Email already in use");
      }

      return false;
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
