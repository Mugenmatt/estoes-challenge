  import useFetch from '../../hooks/useFetch'
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
  } from "@chakra-ui/react"

  
  const TableData = ({DB}) => {

      return (
        <Table variant="simple" w='1344px'>
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
                DB.map(data => {

                    return <>
                    
                        <Tr>

                            <Td> {data.project_name} </Td>
                            <Td> {data.project_manager} </Td>
                            <Td> {data.assigned_to} </Td>
                            <Td> {data.status} </Td>

                        </Tr>

                    </>

                })
            }
          
        </Tbody>
      </Table>
      );
  };
  
  export default TableData;