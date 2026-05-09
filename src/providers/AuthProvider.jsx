import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);
// provider for google log in
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // to prevent log in but reloading page went into log in page
    const [loading, setLoading] = useState(true);

    //to create new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in with google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //to login
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //to sign out 
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // to hold observe is user signed in or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create Provider
 * 3. set a default value (authInfo)
 * 4. [ attention Please !!! ]
 * 5. use the authProvider in the main.jsx
 * 6. access the children inside the authProvider in the main.jsx 
 * 7. export AuthContext
 */