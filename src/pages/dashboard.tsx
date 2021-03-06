import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
    grid: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis:{
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-07-9T00:00:00.000Z',
      '2022-07-10T00:00:00.000Z',
      '2022-07-11T00:00:00.000Z',
      '2022-07-12T00:00:00.000Z',
      '2022-07-13T00:00:00.000Z',
      '2022-07-14T00:00:00.000Z',
      '2022-07-15T00:00:00.000Z',
    ]
  },
  fill:{
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.1,
    }
  },
  grid: {
    show: false,
  },
  tooltip:{
    enabled: false,
  }
} 


const series = [
  {
    name: 'series1', 
    data: [31, 120, 10, 28, 61, 18, 9],
  }
]

export default function Dashboard(){
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex
        width='100%'
        my='6'
        maxW={1480}
        mx='auto'
        px='6'
      >
        <Sidebar />
        <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignContent='flex-start'>
          <Box p={['6','8']} bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='lg' mb='4'>Inscritos da Semana</Text>
            <Chart type='area' height={160} options={options} series={series} />
          </Box>
          <Box p='8' bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='lg' mb='4'>Taxa de Abertura</Text>
            <Chart type='area' height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}