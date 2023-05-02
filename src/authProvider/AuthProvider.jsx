import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [chef, setChef] = useState([]);
    const [user,setUser] = useState(null);

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


      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser);
        })
        return ()=> {
            return unSubscribe();
        }
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
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;