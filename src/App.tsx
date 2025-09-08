import { SimpleGrid, Box } from '@chakra-ui/react'
import './App.css'

import { Layout } from './components/Layout.component'

function App() {
  return (
    <Layout>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="10">
        <Box bg="gray.100" height="200px" borderRadius="md">
          Card 1
        </Box>
        <Box bg="gray.100" height="200px" borderRadius="md">
          Card 2
        </Box>
        <Box bg="gray.100" height="200px" borderRadius="md">
          Card 3
        </Box>
        <Box bg="gray.100" height="200px" borderRadius="md">
          Card 4
        </Box>
      </SimpleGrid>
    </Layout>
  )
}

export default App
