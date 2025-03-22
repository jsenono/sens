import { Button, ButtonText } from "@/components/ui/button";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { Icon, AddIcon, GlobeIcon, PlayIcon, SettingsIcon } from "@/components/ui/icon";
import { TouchableOpacity , Text} from "react-native";
import React from "react";
import { AiModels } from "@/models/ai_model";
import { useActiveModel } from "@/stores/ai-model";
	
const ModelMenu=()=> {
 const [activeModel, setActiveModel] = useActiveModel();
    
  return (
    <Menu
        placement="bottom" 
        offset={5}
        disabledKeys={['Settings']}
        trigger={({ ...triggerProps }) => {
          return (
            <TouchableOpacity {...triggerProps}>
             <Icon as={GlobeIcon} size="lg" className="mr-2" />
            </TouchableOpacity >
          );
        }}
      >
        {/* <MenuItem key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Add account</MenuItemLabel>
        </MenuItem> */}
        {/* <MenuItem key="Community" textValue="Community">
          <Icon as={GlobeIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Community</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Plugins" textValue="Plugins">
          <Icon as={PlayIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Plugins</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem> */}

        {
            AiModels.map((model, index)=>(
                <MenuItem key={model.id} textValue="Settings">
                <Icon as={SettingsIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm">
                <TouchableOpacity onPress={()=>setActiveModel(model.id)}>
                <Text>
                {model.id}

                </Text>

                </TouchableOpacity>
                    </MenuItemLabel>
              </MenuItem>   
            ))
        }
      </Menu>
  );
}

export default ModelMenu