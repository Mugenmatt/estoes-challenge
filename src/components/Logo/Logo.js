import { Box } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"
import React from 'react';

const Logo = () => {
    return (
        <Box d='flex' justifyContent='left' alignItems='center' w='100%' border= '1px solid #D9D9D9' >
            <Image src='https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg' alt='Logo' width='80px' ml='2%' p='15px' />
        </Box>
    );
};

export default Logo;