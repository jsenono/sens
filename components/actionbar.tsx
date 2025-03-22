import { Actionsheet, ActionsheetContent, ActionsheetItem, ActionsheetItemText, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetBackdrop } from "@/components/ui/actionsheet";
// import { Button, ButtonText } from "@/components/ui/button";
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useUserState } from "@/stores/userState";
import { useUser } from "@/app/hooks/get-current-user";
import UserAvatar from "./avatar";
import { useAppVersion } from "@/stores/app-details";
	
const Actionbar=({user})=>{
        const [showActionsheet, setShowActionsheet] = React.useState(false);
        const handleClose = () => setShowActionsheet(false);
          const[currentVersion, setCurrentVersion]=useAppVersion();
        const userName = user.username
        //   const { user, isLoggedIn, loading, error } = useUser();
          return (
            <>
              <TouchableOpacity onPress={() => setShowActionsheet(true)}>
                <UserAvatar userName={userName} />
              </TouchableOpacity>
              <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
                <ActionsheetBackdrop />
                <ActionsheetContent>
                  <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                  </ActionsheetDragIndicatorWrapper>
                  {/* <ActionsheetItem onPress={handleClose}>
                    <ActionsheetItemText>Edit Message</ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem onPress={handleClose}>
                    <ActionsheetItemText>Mark Unread</ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem onPress={handleClose}>
                    <ActionsheetItemText>Remind Me</ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem onPress={handleClose}>
                    <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem isDisabled onPress={handleClose}>
                    <ActionsheetItemText>Delete</ActionsheetItemText>
                  </ActionsheetItem> */}

                  <View>
                   <Text className="text-2xl font-semibold font-custom p-1">
                    
                    Welcome
                    <Text className="text-purple-600 text-3xl font-bold">

                    {" "+ user?.username}
                    </Text>


                    </Text> 
                    <Text className="font-custom mb-2 text-center">{user.email}</Text>
                    <Text className="font-custom mb-2 text-center">{"Version: " + currentVersion.version_name}</Text>

                    {/* <TouchableOpacity className="p-3 mt-1 px-4 bg-purple-500 rounded-md text-white font-custom">
                        <Text className="text-lg text-center bg-purple-500 rounded-md text-white font-custom">Logout</Text>
                    </TouchableOpacity> */}
                  </View>
                </ActionsheetContent>
              </Actionsheet>
            </>
          );
        }

        export default Actionbar;