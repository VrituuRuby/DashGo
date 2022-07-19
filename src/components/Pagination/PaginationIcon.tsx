import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PaginationIconProps{
  isSelected?: boolean,
  children: ReactNode
}
export function PaginationIcon({isSelected = false, children}:PaginationIconProps){
  if (isSelected){
    return (
      <Button
        size='sm'
        fontSize='xs'
        width='4'
        colorScheme='pink'
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {children}
      </Button>
    )
  } else {
    return (
      <Button
        size='sm'
        fontSize='xs'
        width='4'
        bgColor='gray.700'
        _hover={{
          bg: 'gray.500'
        }}
      >
        {children}
      </Button>
    )
  }
}