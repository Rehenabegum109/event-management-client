'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider
} from 'firebase/auth'
import { auth } from '@/firebase/firebase.init';

const AuthContext = createContext()
export const googleProvider = new GoogleAuthProvider();

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // Register with email/password
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Login with email/password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Login with Google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // Logout
  const logout = () => {
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, register, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  )
}


