import { atom, useAtom } from "jotai";
import { useGetVersion } from "@/app/hooks/get-version";




const versionData = useGetVersion();
const appVersionData= atom(versionData)


export const useAppVersion=()=>{
    if(appVersionData){
        
        return useAtom(appVersionData)
    }
}