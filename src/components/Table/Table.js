
  import React, {useContext, useState, useRef, useEffect} from 'react';
import {Context} from '../../App'
  import {Link} from 'react-router-dom'
  import {
    Box,
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
    MenuButton,
    Menu,
    MenuList,
    MenuItem,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from "@chakra-ui/react"
  import { BsThreeDotsVertical } from 'react-icons/bs';
  import { AiFillDelete, AiTwotoneEdit } from 'react-icons/ai';
  import Lottie from 'react-lottie';
  import Delete from '../../assets/lottie/delete.json';
  
  const TableData = () => {

    const { projects, handleDeleteProject } = useContext(Context)
    const [idProject, setIdProject] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()

    const [fakeLoading, setFakeLoading] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Delete
    }

    const handleDelete = (idProject) => {
      handleDeleteProject(idProject)
      onClose()
      setFakeLoading(true)
      setTimeout(() => {
        setFakeLoading(false)
      }, 2000);
    }

      return (
        <>
        {
          fakeLoading ? <Box backgroundColor='#fff' borderRadius='50%'><Lottie options={{...defaultOptions}} width='500px' /></Box> :
          <Table variant="simple" w='1344px' backgroundColor='#fff'>

            <Thead backgroundColor='rgba(0, 0, 0, 0.02);'>
              <Tr>
                <Th>Project Info</Th>
                <Th>Project Manager</Th>
                <Th>Assigned To</Th>
                <Th>Status</Th>
                <Th>Action</Th>
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
                            <Button backgroundColor={data.status === 'Disabled' ? '#F5222D' : '#42ba96'} color='#fff' >{data.status}</Button>
                        </Td>

                        <Td > 
                            <Menu>
                              <MenuButton  
                                as={IconButton}
                                icon={<BsThreeDotsVertical />}
                                variant="ghost"
                                color='rgba(0, 0, 0, 0.85)'
                                colorScheme="black"
                                aria-label="BsThreeDotsVertical"
                                fontSize="25px"
                              />
                              <MenuList>
                                <Link to={{
                                  pathname: '/edit',
                                  state: { id: data.id }
                                }}>
                                <MenuItem icon={<AiTwotoneEdit />}>
                                  Edit
                                </MenuItem>
                                </Link>
                                <MenuItem 
                                  icon={<AiFillDelete />}
                                  onClick={() => {
                                    setIdProject(data.id);
                                    setIsOpen(true);
                                  }}
                                >
                                  Delete
                                </MenuItem>
                              </MenuList>
                            </Menu>
                        </Td>

                    </Tr>
                    
                })
              }
            
          </Tbody>
        
        </Table>
      }
      {
        isOpen && <>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Project
                </AlertDialogHeader>
    
                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>
    
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={()=> handleDelete(idProject)} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
      }
    </>
    );
  };
  
  export default TableData;