import { atom, useAtom } from "jotai";


const isVersionModalOpen= atom(false);

export const useOpenModal=()=>{
return useAtom(isVersionModalOpen)
}
