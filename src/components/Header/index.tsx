
import { Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react";
import { Profile } from './Profile'
import { Search } from './Search'
import { Logo } from './Logo'
import { NotificationsNav} from './NotificationsNav'
import { useSidebarDrawer } from "../../context/SidebarNavContext";
import { RiMenuLine } from "react-icons/ri";
export function Header(){
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return(
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mt='6'
      mx='auto'  
      px='6'
      align='center'
    >
      { !isWideVersion && (
        <IconButton 
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          letterSpacing='tight'
          display='flex'
          mr='2'
        >

        </IconButton>
      )}
      <Logo />
      { isWideVersion && <Search />}
      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}