import { Center } from '@chakra-ui/layout';
import React, {useContext} from 'react';
import { Context } from '../context/context';

import Table from '../components/Table/Table'

const ListProject = () => {

    const DB = useContext(Context)

    return (
        <>
            <Center>
                
                <Table DB={DB} />

            </Center>
            
        </>
    );
};

export default ListProject;