import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {


    const [chef, setChef] = useState([]);
     

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])


    const info = {
        chef
    }
    return (
        <AuthContext.Provider value={info}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;