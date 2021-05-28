import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import { Box, Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import Logo from "../Logo/Logo";

const NavBar = () => {
    const location = useLocation();

    const pageTitle = () => {
    
        if(location.pathname === '/add') {
            return 'Add Project'
        } else if(location.pathname === '/edit') {
            return 'Edit Project'
        } else {
            return 'My Projects'
        }
    }

    return (
        <Box backgroundColor='#fff'>

            <Link to='/'>         
                <Logo />
            </Link>

            <Box w='100%' m='auto' mb='3%' d='flex' justifyContent='space-between' alignItems='center' boxShadow='inset 0px -1px 0px #D9D9D9'>

                <Heading color='rgba(0, 0, 0, 0.85)' fontSize='20px' lineHeight='32px' m='10px 3% 10px 3%'>{pageTitle()}</Heading >
                {
                    location.pathname === '/' &&
                    <Link to='/add' style={{marginRight:'3%'}} >
                        <Button colorScheme='red'  >+ Add project</Button>
                    </Link>
                }
            </Box>
            
        </Box>
    );
};

export default NavBar;