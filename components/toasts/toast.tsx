
import { useToast, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import React from "react";
import { Button, Text } from "react-native";
	
const ToastComponent=()=> {
          const toast = useToast();
          const [toastId, setToastId] = React.useState(0);
          const handleToast = () => {
            if (!toast.isActive(toastId)) {
              showNewToast();
            }
          };
          const showNewToast = () => {
            const newId = Math.random();
            setToastId(newId);
            toast.show({
              id: newId,
              placement: 'top',
              duration: 3000,
              render: ({ id }) => {
                const uniqueToastId = "toast-" + id;
                return (
                  <Toast nativeID={uniqueToastId} action="muted" variant="solid" >
                    <ToastTitle>Hello!</ToastTitle>
                    <ToastDescription>
                      This is a customized toast message.
                    </ToastDescription>
                  </Toast>
                );
              },
            });
          };
          return (
            <Button onPress={handleToast} title="Press Me" />
          );
        }

        export default ToastComponent;