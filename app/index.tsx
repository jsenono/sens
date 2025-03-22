import ShardChat from "@/components/mainchat";
import { Link, Redirect } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "./hooks/get-current-user";

export default function Index() {
  const { user, isLoggedIn, loading, error } = useUser();
  if(!loading && isLoggedIn){
    return <Redirect href="/chat"/>
  }
  return (
   <SafeAreaView>

    <View className="font-custom justify-center items-center my-auto p-4">
      <ScrollView
        className=" "
        
        
      >
        <View >  

          <Image
          source={require("../assets/images/Onboarding/5.png")}
          resizeMode="contain"
        style={{width: 200, height: 100}}
        className="mx-auto"
          />
          <Image
          source={require("../assets/images/Onboarding/3.png")}
          resizeMode="contain"
        style={{width: 300, height: 300}}
        className="mx-auto"
          
          />
          <Text className="text-2xl font-bold p-4 font-custom text-center justify-center ">New Era in AI </Text>

          <Text className="text-xl font-normal p-3 px-7 font-custom text-center justify-center ">Welcome to the greatest AI app of all time built by the best </Text>
          <TouchableOpacity className="bg-purple-500 p-2 m-2 rounded-lg">
            <Link href="/(authentication)/sign-in" className="text-white text-center p-2 px-3 font-custom text-xl ">Proceed to Login</Link>
          </TouchableOpacity>
          
 
    </View>

    </ScrollView>
    </View>

  
   </SafeAreaView>

  );
}
