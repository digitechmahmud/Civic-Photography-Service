import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Akram' });
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        loading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
      
        return signInWithEmailAndPassword(auth, email, password)
    } 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("State Change", currentUser);
            setUser(currentUser);
            loading(false)
        })
        return () => unsubscribe();
    }, []);

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        loading(true)
        return updateProfile(auth.currentUser, profile);
    }

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        updateUserProfile,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;