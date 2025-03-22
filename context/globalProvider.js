import { getCurrentUser } from "@/app/hooks/get-current-user";
import { createContext, useContext, useEffect, useState } from "react";




const GlobalContext = createContext();
export const useGlobalContext = () => 
  useContext(GlobalContext);


export default GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCurrentUser().then((currentUser) => {
            if (currentUser) {
                setIsLoggedIn(true);
                setUser(currentUser);
            }
            setLoading(false);
        }
        ).catch((error) => {
            setError(error);
            setLoading(false);
        })
    .finally(() => {
        setLoading(false);
    }
)


    }, []);


    return(
       
<GlobalContext.Provider
value={{
isLoggedIn,
setIsLoggedIn,
user,
loading,
error
}}

>
{children}
</GlobalContext.Provider>
    )

}