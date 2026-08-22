import { createContext, useState } from 'react';

export const AuthContext = createContext();

// Provider component that wraps your app
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const register = (userData) => {
	setUser(userData);
    };

    const login = (email, password) => {

	if (
	    user &&
	    user.email === email &&
	    user.password === password
	) {
	    setIsLoggedIn(true);
	    return true;
	}

	return false;
    };

    const logout = () => {
	setUser(null);
	setIsLoggedIn(false);
    };

    return (
	<AuthContext.Provider
	    value={{
		user,
		isLoggedIn,
		register,
		login,
		logout
	    }}
	>
	    {children}
	</AuthContext.Provider>
    );
}
