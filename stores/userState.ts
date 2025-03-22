import { getCurrentUser } from "@/app/hooks/get-current-user";
import { atom, useAtom } from "jotai";
import { useState, useEffect } from "react";

const userAtom= atom(false)

const userData = getCurrentUser();
const userDataAtom = atom(userData);


export const useUserState=async()=>{
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    // const [data, setData] = useAtom(userAtom);


    // useEffect(() => {
    //     setLoading(true);
    //     getCurrentUser()
    //         .then((currentUser) => {
    //             if (currentUser) {
    //                 setIsLoggedIn(true);
    //                 setUser(currentUser);
    //             }
    //         })
    //         .catch((err) => {
    //             setError(err);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, []);

    
    return  useAtom(userDataAtom);
}