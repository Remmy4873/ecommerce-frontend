import React from 'react'
import { createContext } from 'react'


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const authInfo ={

    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;