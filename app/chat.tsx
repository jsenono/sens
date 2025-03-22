import { View, Text, ActivityIndicator, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUserState } from '@/stores/userState'
import { getCurrentUser, useUser } from './hooks/get-current-user';
import ShardChat from '@/components/mainchat';
import AccountNavigation from '@/components/account-navigation';
import { useActiveModel } from '@/stores/ai-model';
import { useAppVersion } from '@/stores/app-details';
import VersionModal from '@/components/modals/versionModal';
import { useOpenModal } from '@/stores/modal-store';

export default function Chat() {

  
  const { user, isLoggedIn, loading, error } = useUser();
  const[currentVersion, setCurrentVersion]=useAppVersion();

  const [showVersionModal, setShowVersionModal]= useOpenModal()
  
  // console.log(user)
  console.log(currentVersion)
  console.log(showVersionModal)
  // const [data, setData] = useUserState()
  // console.log(data)

  
  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error: {error}</Text>;



    
  if(currentVersion?.active==false){
    setShowVersionModal(true)
  }
 

  
  return (
    <>
    {
showVersionModal?
<View className='fixed top-0'>

<VersionModal/>

</View>

:""
    }
      
    <View className="h-85">
      <AccountNavigation user={user}/>
     
  {user.status == false?(
    <View className='justify-center items-center flex-1 bg-zinc-900/40 p-6'>
      <Modal>
        <View className="bg-neutral-300 p-10 text-center justify-center">
        <Text className='font-custom'>Your Account is Restricted.</Text>

        </View>
      </Modal>
</View>
   
  ):("")

}

      {isLoggedIn ? (
        <>
        {/* <Text>Welcome, {user?.username}!</Text> */}
        <View className='h-[85vh]'>

        <ShardChat/>
        </View>
        </>
      ) : (
        <Text>Please log in.</Text>
      )}
    </View>
    </>
  )
}