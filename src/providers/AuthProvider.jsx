import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const name = 'potato alu mia'
    //to create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //to login
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //to sign out 
    const signOutUser = () => {
        return signOut(auth)
    }

    // to hold observe is user signed in or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    //set observer for current signin user
    // onAuthStateChanged(auth, currentUser => {
    //     if (currentUser) {
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser)
    //     }
    //     else {
    //         console.log('no user currently logged in')
    //         setUser(null);
    //     }
    // })

    const authInfo = {
        user,
        name,
        createUser,
        signInUser,
        signOutUser

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