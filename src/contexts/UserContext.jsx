import { createContext, useEffect, useState } from "react";
export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [clerk, setClerk] = useState(null);

    useEffect(() => {
        const loadStoreAuth = () => {
            let sessionClerk = sessionStorage.getItem("@Auth:clerk");
            if(sessionClerk) {
                setClerk(sessionClerk); 
            }
        };
        loadStoreAuth();
    }, []); 

    /** SIGN IN **/
    async function signIn(email, password) {
        try {
            setClerk(email);
            sessionStorage.setItem("@Auth:clerk", email);
            return true;
        } catch (error) {
            // throw error;
            return 'E-mail ou senha incorreta';
        }
    }


    return (
        <UserContext.Provider 
            value={ { signIn, signed: !!clerk, clerk} }
        >
            {children}
        </UserContext.Provider>
    );

}