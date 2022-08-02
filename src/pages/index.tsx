import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;

}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid e-mail'),
  password: yup.string().required('Password is required')

})
export default function Home() {
  const {register, handleSubmit, formState} = useForm<SignInFormData>({
    resolver: yupResolver(SignInFormSchema)
  })

  const errors = formState.errors;
  
  
  const handleSignIn: SubmitHandler<SignInFormData> = async (data) =>{
    await new Promise (resolve => setTimeout(resolve,500));
    alert(JSON.stringify(data))
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center"
      justify='center'
    > 
      <Flex
        as='form' 
        w="100%"
        maxW={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        direction="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name='email'
            type='email'
            label='E-mail'
            register={register}
            error={errors.email}
          />
          <Input
            name='password'
            type='password'
            label='Password'
            error={errors.password}
            register={register}
          />
          <Button type="submit" mt="6" colorScheme="pink" isLoading={formState.isSubmitting}>Sign In</Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
