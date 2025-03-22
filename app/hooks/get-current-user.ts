import { atom, useAtom } from "jotai";
import { appwriteClient, appwriteConfig } from "@/lib/appwrite";
import { Account, Databases, Query } from "react-native-appwrite";
import { useEffect } from "react";

//This is the fuckin backbone of this project. its the cause of all the pain.
const account = new Account(appwriteClient);
const databases = new Databases(appwriteClient);

// Hook to Persist State (Might change to own utility if project grows)
export const userAtom = atom<any | null>(null);
export const isLoggedInAtom = atom(false);
export const loadingAtom = atom(true);
export const errorAtom = atom<string | null>(null);

// Getting the current User
export const getCurrentUser = async () => {
  try {
    const currentUser = await account.get();
    // console.log(currentUser)

    const currentUserDetails = await databases.listDocuments(
      appwriteConfig.DatabaseId,
      appwriteConfig.UserCollectionId,
      [
        Query.equal("accountId", currentUser.$id)
    ]
    );



    if (!currentUserDetails.documents.length) {
      throw new Error("User not found in database");
    }

    

    return currentUserDetails.documents[0];
  } catch (error: any) {
    console.log("Error fetching user:", error.message);
    // throw error;
  }
};

// Forgot to call this in a promise so I think it might cause issues for folks with shity internet. Who cares about Bimcell users anyway. 
export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [error, setError] = useAtom(errorAtom);

  useEffect(() => {
    setLoading(true);
    
    getCurrentUser()
      .then((currentUser) => {
        setUser(currentUser);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  return { user, isLoggedIn, loading, error };
};
