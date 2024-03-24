import React, { useState, createContext, useContext } from 'react';

// Create Context
const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext)
};

// Provider Component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        nationality: '',
        language: '',
        bio: '',
    });

    // Function to update user data
    const updateUser = (userData) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

