import { Account, Databases, ID } from "react-native-appwrite";
import { appwriteClient } from "../lib/appwrite";
import { appwriteConfig } from "../lib/appwrite";
import { router } from "expo-router";

interface User {
  email: string;
  password: string;
  username: string;
}

const account = new Account(appwriteClient);
const userDatabase = new Databases(appwriteClient);

export const createUser = async (email: string, password: string, username: string) => {
  try {
    // Important Promise to create user: Will have to handle internet states as well. 
    const newAccount = await account.create(ID.unique(), email, password, username);

    if (!newAccount || !newAccount.$id) {
      throw new Error("Account creation failed.");
    }

    console.log("New Account Created:", newAccount);

   //Will desctructure this into a hook later. 
    try {
      const newUser = await userDatabase.createDocument(
        appwriteConfig.DatabaseId,
        appwriteConfig.UserCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email,
          username,
        }
      );

      console.log("User Created in Database:", newUser);
      return newUser;
    } catch (error) {
      console.error("Error creating user in database:", error);
    }
  } catch (error) {
    console.error("Error creating account:", error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await account.createEmailPasswordSession(email, password);
    console.log("Successfully signed in");
    router.replace("/chat");
  } catch (error) {
    console.error("Sign-in error:", error);
  }
};
