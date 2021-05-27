import React from 'react';
import { ChakraProvider, Box, Alert, Heading } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import Logo from "./components/Logo/Logo";
import Table from './components/Table/Table'

function App() {
  return (
    <div className="App">

      <ChakraProvider>

        <Logo />

        <Box w='100%' m='auto' d='flex' justifyContent='space-between' alignItems='center'>

          <Heading >My Projects</Heading >
         
          <Button colorScheme='red' >+ Add project</Button>

        </Box>

        <Table />

      </ChakraProvider>

    </div>
  );
}

export default App;
