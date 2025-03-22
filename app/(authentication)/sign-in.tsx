import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/forms/formField'
import { Link, router } from 'expo-router'
import { createUser, signIn } from '@/utils/create-user'
import { useUser } from '../hooks/get-current-user'




export default function SignIn() {
    
    const { user, isLoggedIn, loading, error } = useUser();
    useEffect(() => {
      if(user){
          router.replace('/chat')
      }
     
    }, [])


    const [form, setForm]= useState({
        email: '',
        password: ''
    })

    const[ isSubmitting,setIsSubmitting]= useState(false)

   
       const submit = async()=>{
       if(!form.email || !form.password){
           Alert.alert('Error', 'Please fill in all fields')
       }
   
       setIsSubmitting(true);
   
       try {
           const result = await signIn(
               form.email,
               form.password
           )
           console.log(result)
           console.log("Successfully signed In")
           router.replace('/chat')
           
       } catch (error) {
           console.log(error)
           Alert.alert('Error', error instanceof Error ? error.message : 'An unknown error occurred')
       }
   finally{
       setIsSubmitting(false)
   }
}
  return (
    <SafeAreaView>
        <ScrollView>
            <Image
            source={require("../../assets/images/Onboarding/5.png")}
            resizeMode="contain"
            style={{width: 200, height: 100}}
            className="mx-auto"
            />

       

        <View>
          <Text className='font-custom p-4 text-xl font-semibold'>Sign In to SenonoAi</Text>
          <View className='p-2'>

          <FormField 
          title='Email'
          value={form.email}
          handleChangeText={(e)=> setForm({...form, email: e})}
          KeyboardType='email-address'
            placeholder='Enter your email'
        
          />

<FormField 
                          title='Password'

                          value={form.password}
                          handleChangeText={(e) => setForm({ ...form, password: e })}
                          placeholder='Enter your Password'
                          KeyboardType={'default'}   />
          </View>

   
   <TouchableOpacity
   className='bg-purple-500 p-4 m-2 rounded-lg font-custom text-white text-center px-3 py-3 text-lg'
   onPress={submit}
   
   >
    <Text className=' font-custom text-white text-lg text-center'>
        
        {
         isSubmitting ? 'Submitting...': 'Sign In'
   }
        </Text>
   
   </TouchableOpacity>

<View className=' flex-row justify-center items-center gap-2'>
    <Text className='font-custom text-md'>Don't have an account?</Text>
    <Link href="../(authentication)/sign-up" className='text-purple-500 font-custom text-md'> <Text className='text-purple-500 font-custom text-lg'> Sign In</Text></Link>


</View>
   </View>

       

        </ScrollView>
    </SafeAreaView>
  )
}