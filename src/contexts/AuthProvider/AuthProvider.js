import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unSubscribe();
    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userLogOut = () => {
        return signOut(auth);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, providerGoogle);
    }



    const authInfo = {
        createUser,
        googleSignIn,
        user,
        loading,
        userLogIn,
        userLogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;