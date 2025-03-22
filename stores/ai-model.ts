import { atom, useAtom } from "jotai";


const ActiveModelAtom= atom("gemini-2.0-flash-thinking-exp-1219")

export const useActiveModel=()=>{
    return useAtom(ActiveModelAtom)
}