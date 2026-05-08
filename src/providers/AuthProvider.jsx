import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const authInfo = {
        name: 'Abu Nayim Mohammad Rakib'
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