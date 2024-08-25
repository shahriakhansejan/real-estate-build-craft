import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


//   Google Login
  const provider = new GoogleAuthProvider();
  const googleCreate = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

//  Github Login
const gitProvider = new GithubAuthProvider();
const gitCreate = () => {
    setLoading(true)
    return signInWithPopup(auth, gitProvider);
} 

// Email-password Register
const emailCreate = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

// Email-password Login
const emailLogin = (email, password) =>{
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
}


//   LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    googleCreate,
    user,
    logOut,
    loading,
    gitCreate,
    emailCreate,
    emailLogin
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
