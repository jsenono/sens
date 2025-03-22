import { View, Text } from 'react-native';
import React from 'react';
import ModelMenu from './menu';
import { useActiveModel } from '@/stores/ai-model';
import Actionbar from './actionbar';

const MAX_MODEL_LENGTH = 20; 

const AccountNavigation = ({user}) => {
  const [activeModel, setActiveModel] = useActiveModel();

  return (
    <View className="flex p-6 bg-slate">
      <View className="flex-row gap-2 items-center justify-between">
        <View>
        
          <ModelMenu onSelectModel={setActiveModel} />
        </View>
        <View className='justify-center text-center align-center '>
          <Text className="font-custom text-center">SenonoAi</Text>
         
          <Text className="font-custom bg-slate-300 p-2 text-xs px-4 rounded-full">
            {activeModel.length > MAX_MODEL_LENGTH
              ? activeModel.slice(0, MAX_MODEL_LENGTH) + "…"
              : activeModel}
          </Text>
        </View>
        <View>
          {/* <Text className="p-1 bg-purple-500 font-custom rounded-full text-2xl font-bold text-white w-10 h-10 justify-center text-center flex">
            S
          </Text> */}

          <Actionbar user= {user}/>
        </View>
      </View>
    </View>
  );
};

export default AccountNavigation;
