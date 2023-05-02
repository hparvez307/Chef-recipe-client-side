import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [loading, setLoading] = useState(true);
    const [chef, setChef] = useState([]);
    const [user,setUser] = useState(null);
     console.log(user);
    const google = () => {
        
        return signInWithPopup(auth, googleProvider);
    }
    const github = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const createUser = (email, password) =>  {
       
         return createUserWithEmailAndPassword(auth, email, password);
      }
      const loginUser = (email, password) =>  {
        
         return signInWithEmailAndPassword(auth, email, password);
      }

      const logOut = () => {
        
        return signOut(auth);
      }

      useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
              
           })
  
           return () => {
            unSubscribe();
           };
        },[])

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])


    const authInfo = {
        chef,
        createUser,
        loginUser,
        google,
        github,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;