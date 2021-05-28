
  import React, {useContext} from 'react';
import {Context} from '../../App'
  import {Link} from 'react-router-dom'
  import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Image,
    Text,
    IconButton,
    Center,
  } from "@chakra-ui/react"
  import Alert from '../Alert/Alert'
  import { BsThreeDotsVertical } from 'react-icons/bs';
  
  const TableData = () => {

    const { projects } = useContext(Context)

      return (
        <Table variant="simple" w='1344px' backgroundColor='#fff'>

          <Thead backgroundColor='rgba(0, 0, 0, 0.02);'>
            <Tr>
              <Th>Project Info</Th>
              <Th>Project Manager</Th>
              <Th>Assigned To</Th>
              <Th>Status</Th>
              <Th>Action</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>

            {
                projects.map((data) => {

                    return <Tr key={data.id}>

                            <Td> 
                              {data.project_name} 
                              <Text fontSize='0.7em' color='rgba(0, 0, 0, 0.45)'> {data.project_created_at} </Text>
                            </Td>

                            <Td > 
                                <Image d='inline' w='30px' mr='4%' src={data.project_manager_avatar} alt='Project Manager Avatar' /> 
                                {data.project_manager_name} 
                            </Td>

                            <Td > 
                                <Image d='inline' w='30px' mr='4%' src={data.assigned_to_avatar} alt='Assigned To Avatar' /> 
                                {data.assigned_to_name}  
                            </Td>

                            <Td> 
                                <Button>{data.status}</Button>
                            </Td>

                            <Td > 
                                <Link
                                    to={{
                                        pathname: `/edit`,
                                        state: { id: data.id }
                                    }}
                                >
                                        <IconButton
                                            variant="ghost"
                                            colorScheme="black"
                                            aria-label="BsThreeDotsVertical"
                                            fontSize="20px"
                                            icon={<BsThreeDotsVertical />}
                                        />
                                </Link>
                            </Td>

                            <Td>
                              <Alert word='Delete' title='Delete' alert='Are you sure? There is no CTRL + Z!' confirm='Delete'/>
                            </Td>

                        </Tr>
                })
            }
          
        </Tbody>
        
      </Table>
      );
  };
  
  export default TableData;