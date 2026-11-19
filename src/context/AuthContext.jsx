import { createContext, useState } from "react";

export const AuthContext = createContext();

// Provider component that wraps your app
export const AuthProvider = ({ children }) => {

    // Store the registered user's details
    const [user, setUser] = useState(null);

    // Track whether the user is currently logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Store the user's registration information
    const register = (userData) => {
        setUser({
	    ...userData,
	    id: Date.now()
	})

	setIsLoggedIn(true);
    };

    // Check entered login details against registered user
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

    // Log out but keep registered user details
    const logout = () => {
        setIsLoggedIn(false);
	setUser(null);
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
};
