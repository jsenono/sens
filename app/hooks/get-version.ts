import { atom, useAtom } from "jotai";
import { appwriteClient, appwriteConfig } from "@/lib/appwrite";
import { Account, Databases, Query } from "react-native-appwrite";
import { useEffect } from "react";

//Will add promises later. 

const databases = new Databases(appwriteClient);


export const useGetVersion = async()=>{
    try{
    const AppDetails = await databases.listDocuments(

          appwriteConfig.DatabaseId,
          appwriteConfig.AppUtilsCollectionId,
          [

        ]
        );
    
    
    
        if (!AppDetails.documents.length) {
          throw new Error("Version not found");
        }
    
        
    
        return AppDetails.documents[0];
      } catch (error: any) {
        console.log("Error fetching version:", error.message);
        throw error;
      }
    }