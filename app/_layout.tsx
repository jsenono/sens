import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React from "react";
import "../global.css";
import { useFonts } from "expo-font";
import GlobalProvider from "../context/globalProvider";
import VersionModal from "@/components/modals/versionModal";


export default function RootLayout() {
  
  return (
    <GluestackUIProvider mode="light"><Stack >
      <VersionModal/>
        <Stack.Screen name="index" options={{headerShown:false}} />
        <Stack.Screen name="chat" options={{headerShown:false}} />
        <Stack.Screen name="(authentication)" options={{headerShown:false}} />
      </Stack></GluestackUIProvider>
  );
}
