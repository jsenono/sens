import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import  '../../global.css'
interface FormFieldProps{
    title: string
    value: string
    handleChangeText: (e: string)=> void
    KeyboardType: 'email-address' | 'default', 
    placeholder: string
}

const FormField:React.FC<FormFieldProps> = (
    {title, value, handleChangeText, KeyboardType,placeholder, ...props }
) => {

   const [showpassword, setShowPassword] = useState(false);

  return (
    <View className='space-y-2 p-1'>
        <Text className='text-sm font-custom'>{title}</Text>
        <View className='bg-neutral-200 p-2 px-2 w-full rounded-md h-16 font-custom flex items-center justify-center '>
            <TextInput
            value={value}
            onChangeText={handleChangeText}
            keyboardType={KeyboardType}
            className='w-full h-full font-custom mx-auto my-auto outline-none focus:outline-none '
            placeholder={placeholder}
            secureTextEntry={title==='Password' && !showpassword}
            />
     

        </View>

       

    </View>
  )
}

export default FormField