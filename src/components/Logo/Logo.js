import { Box } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"
import React from 'react';

const Logo = () => {
    return (
        <Box d='flex' justifyContent='left' alignItems='center' w='100%' mb='2%' borderBottom='1px solid #ccc' >
            <Image  src='https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg' alt='Logo' width='80px' p='15px' />
        </Box>
    );
};

export default Logo;