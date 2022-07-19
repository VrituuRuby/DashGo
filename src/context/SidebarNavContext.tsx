import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

const SidebarNavContex = createContext({} as SidebarDrawerContextData);

type SidebarDrawerContextData = UseDisclosureReturn
interface SidebarNavContextProviderProps{
  children: ReactNode
}
export function SidebarNavContextProvider({children}:SidebarNavContextProviderProps){
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {disclosure.onClose()}, [router.asPath])
  return (
    <SidebarNavContex.Provider value={disclosure}>
      {children}
    </SidebarNavContex.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarNavContex)