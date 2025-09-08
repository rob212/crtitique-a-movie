import { Container, Flex, Heading, VStack, Link } from '@chakra-ui/react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW="container.xl" py="8">
      <VStack gap="5">
        <Flex
          as="header"
          width="full"
          align="center"
          borderBottom="1px"
          borderColor="gray.200"
          pb="4"
        >
          <Heading as="h1" size="lg">
            <Link href="/">Critique a Movie</Link>
          </Heading>
        </Flex>
        <Flex as="main" width="full">
          {children}
        </Flex>
      </VStack>
    </Container>
  )
}
