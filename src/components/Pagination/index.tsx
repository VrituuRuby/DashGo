import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationIcon } from "./PaginationIcon";

export function Pagination(){
  return(
    <Stack
      direction={['column','row']}
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction='row'
        spacing='2'
      >
      <PaginationIcon isSelected>1</PaginationIcon>
      <PaginationIcon>2</PaginationIcon>
      <PaginationIcon>3</PaginationIcon>
      <PaginationIcon>4</PaginationIcon>
      </Stack>
    </Stack>
  )
}