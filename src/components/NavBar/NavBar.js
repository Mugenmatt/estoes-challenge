import React from 'react';
import { Box, Alert, Heading } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import Logo from "../Logo/Logo";

const NavBar = () => {
    return (
        <>
                    
            <Logo />

            <Box w='100%' m='auto' mb='3%' d='flex' justifyContent='space-between' alignItems='center' boxShadow='inset 0px -1px 0px #D9D9D9'>

                <Heading color='rgba(0, 0, 0, 0.85)' fontSize='20px' fontWeight='600' lineHeight='32px' ml='3%' >My Projects</Heading >

                <Button colorScheme='red' m='10px 3% 10px 0' >+ Add project</Button>

            </Box>
            
        </>
    );
};

export default NavBar;