import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";

interface NavLinkProps{
  icon: ElementType,
  children: ReactNode
}
export function NavLink({children, icon, ...rest} : NavLinkProps){
  return(
    <Link display='flex' alignContent='center' color='gray.50' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{children}</Text>
    </Link>
  )
}