"use client"

import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Check localStorage during initialization
        if (typeof window !== 'undefined') {
            return localStorage.getItem('isAuthenticated') === 'true';
        }
        return false; // default value for SSR or if localStorage isn't available
        });

        useEffect(() => {
        // Ensure this runs on the client side only
        const authStatus = localStorage.getItem('isAuthenticated');
        setIsAuthenticated(authStatus === 'true');
        }, []);


  const login = () => {
    localStorage.setItem('isAuthenticated', 'true')
    setIsAuthenticated(localStorage.getItem('isAuthenticated'));
  };

  const logout = () => {
    localStorage.setItem('isAuthenticated', 'false')
    setIsAuthenticated(localStorage.getItem('isAuthenticated'));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
