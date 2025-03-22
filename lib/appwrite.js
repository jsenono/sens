import { Client } from "react-native-appwrite"

export const appwriteConfig={
    endpoint: "",
    platform:"com.jsenono.senonoai",
    projectId:"",
    DatabaseId:"",
    UserCollectionId:"",
    AppUtilsCollectionId:"",
}

export const appwriteClient = new Client()
appwriteClient
// .setEndpoint(appwriteConfig.endpoint)
.setProject(appwriteConfig.projectId)
.setPlatform(appwriteConfig.platform)


