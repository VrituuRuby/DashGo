import { Box, Flex, Text, Avatar} from "@chakra-ui/react";


interface ProfileProps{
  showProfileData?: boolean,
}

export function Profile({showProfileData = true} : ProfileProps){
  return (
        <Flex align='center'>
          {showProfileData && (
            <Box mr='4' textAlign='right'>
              <Text>Victor Velozo</Text>
              <Text color='gray.300' fontSize='sm'>victor.velozo@outlook.com</Text>
            </Box>
          )}
          <Avatar  size='md' name='Victor Velozo' src='https://github.com/VrituuRuby.png'/>
        </Flex>
  )
}