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
    const [user, setUser] = useState(null);
    

    // sign in with google
    const google = () => {

        return signInWithPopup(auth, googleProvider);
    }

    // sign in with github
    const github = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // sign up with email and password
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email and password
    const loginUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }


    // logout 
    const logOut = () => {

        return signOut(auth);
    }

    // setup observer for user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);

        })

        return () => {
            unSubscribe();
        };
    }, [])

    // laod data for all children
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])


    // context value
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