import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { FieldError, UseFormRegister } from "react-hook-form";


interface InputProps extends ChakraInputProps{
  name: string,
  label?: string,
  register: any,
  error?: FieldError
}


export const Input = ({name, label, error = null, register, ...rest}: InputProps) =>{
  return (
  <FormControl isInvalid={!!error}>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <ChakraInput 
      id={name}
      name={name}
      focusBorderColor="pink.500"
      bg="gray.900"
      variant="filled"
      _hover={{
        bg: "gray.900"
      }}
      size="lg"
      {...register(name)}
      {...rest}
    />
    
    {!!error && (
      <FormErrorMessage>
        {error.message}
      </FormErrorMessage>
    )}
  </FormControl>
  ) 
}

