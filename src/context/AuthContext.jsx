import { createContext, useState } from 'react';

export const AuthContext = createContext('dark');

// Provider component that wraps your app
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState('dark'); // Manage the theme state

    return (
	<AuthProvider.Provider value={{ auth, setAuth }}>
	    {children}
	</AuthProvider.Provider>
    );
}
