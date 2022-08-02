import { Box,  Button,  Divider,  Flex, Heading, HStack, SimpleGrid, VStack} from "@chakra-ui/react";
import Link from "next/link";import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,

}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('E-mail is required').email('Invalid e-mail'),
  password: yup.string().required('Password is required'),
  password_confirmation: yup.string().required('Confirmation password is required').oneOf([null, yup.ref('password')], 'Passwords must be the same'),
})

export default function CreateUser(){
  const { register, handleSubmit, formState} = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const errors = formState.errors

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async data =>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data)
  }

  return(
    <Box>
      <Header />
      <Flex width='100%'
        my='6' maxW={1480}
        mx='auto'
        px='6'
      >con theme]
      Inherits=xcursor-breeze
      
        <Sidebar />
        <Box 
          flex='1' 
          borderRadius={8} 
          bg='gray.800' 
          p={['6','8']} 
          as='form' 
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='lg' fontWeight='normal'>Create User</Heading>
          <Divider my='6' borderColor='gray.700'/>
          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
              <Input name='name' register={register} error={errors.name} label='Full name'/>
              <Input name='email' register={register} error={errors.email} type='email' label='E-mail'/>
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
              <Input 
                name='password' 
                error={errors.password} 
                register={register} 
                type='password' 
                label='Password'
              />
              <Input 
                name='password_confirmation'  
                error={errors.password_confirmation}
                register={register} 
                type='password' 
                label='Repeat password'/>
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref> 
                <Button colorScheme='whiteAlpha'>Cancel</Button>
              </Link>
              <Button colorScheme='pink' type='submit' isLoading={formState.isSubmitting}>Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}