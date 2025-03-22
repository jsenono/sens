import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Modal as MModal, ModalProps } from 'react-native'

type  Props = ModalProps &{
    isOpen:boolean;
    withInput?:boolean;
}

const Modal = ({isOpen, withInput, children, ...rest}:Props) => {
    const content = withInput ? (
       < KeyboardAvoidingView className='justify-center items-center flex-1 bg-zinc-900/40'>
       {children}
       </KeyboardAvoidingView>):(
        <View className='justify-center items-center flex-1 bg-zinc-900/40 my-auto mt-24'>
            {children}
        </View>
    )
  return (
    <MModal
    visible={isOpen}
    transparent
    animationType='fade'
    statusBarTranslucent
    {...rest}
    
    >
        {content}

    </MModal>
  )
}

export default Modal