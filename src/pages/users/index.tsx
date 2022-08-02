import Link from "next/link"; 
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Td, Text, useBreakpoint, useBreakpointValue} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return(
    <Box>
      <Header />
      <Flex
        width='100%'
        my='6'
        maxW={1480}
        mx='auto'
        px='6'
      >
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Users</Heading>
            <Link href='/users/create' passHref>
              <Button 
                as='a' 
                size='sm' 
                fontSize='sm' 
                colorScheme='pink' 
                leftIcon={<Icon as={RiAddLine} fontSize='20'/>}
              >
                Create New
              </Button>
            
            </Link>
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4','4','6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink'></Checkbox>
                </Th>
                <Th >
                  User
                </Th>
                { isWideVersion && <Th>Registration date</Th>}
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4','4','6']}>
                  <Checkbox colorScheme='pink'></Checkbox>
                </Td>
                <Td px={['4','4','6']}>
                  <Box>
                    <Text fontWeight='bold'>Victor Velozo</Text>
                    <Text fontWeight='bold' size='sm'>victor.velozo@outlook.com</Text>
                  </Box>  
                </Td>
                { isWideVersion && <Td>15 de Julho, 2022</Td>}
                <Td px={['4','4','6']}>
                  <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='20'/>}>Editar</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}