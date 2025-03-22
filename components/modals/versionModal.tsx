
import { Modal, ModalBackdrop, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter } from "@/components/ui/modal";

import { Icon, CloseIcon } from "@/components/ui/icon";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useOpenModal } from "@/stores/modal-store";


	
const VersionModal=()=>{
  
          const [showModal, setShowModal] = React.useState(false);
          const [showVersionModal, setShowVersionModal]= useOpenModal()
          return (
            <View className='h-[300px]'>
              
              <Modal
                isOpen={showVersionModal}
                onClose={() => {
                  setShowModal(false);
                }}
                size="md" 
              >
                <ModalBackdrop />
                <ModalContent>
                  <ModalHeader>
                    <Text className="text-typography-950 font-custom">
                      App Notice
                    </Text>
                    <ModalCloseButton >
                      <Icon as={CloseIcon} size="md"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"/>
                    </ModalCloseButton>
                  </ModalHeader>
                  <ModalBody>
                    <Text  className="text-typography-500 font-custom">
                     This version of the app is restricted. Please update your app to continue normal usage. 
                    </Text>
                  </ModalBody>
                  <ModalFooter>
                    <TouchableOpacity
                    
                
                      onPress={() => {
                        setShowVersionModal(false);
                      }}
                    >
                      <Text className="font-custom">Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        // setShowVersionModal(false);
                      }}
                    >
                      <Text className="font-custom">Exit</Text>
                    </TouchableOpacity>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </View>
          );
        }

        export default VersionModal;
