import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {


    const [chef, setChef] = useState([]);

    const createUser = (email, password) =>  {
   
         return createUserWithEmailAndPassword(auth, email, password);
      }
      const loginUser = (email, password) =>  {
      
         return signInWithEmailAndPassword(auth, email, password);
      }
  

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])


    const authInfo = {
        chef,
        createUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;