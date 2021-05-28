import React, {useState, createContext} from 'react';
import { DB } from './context/context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Box, ChakraProvider } from "@chakra-ui/react"
import ListProject from './pages/ListProject';

import NavBar from './components/NavBar/NavBar';
import FormAddEdit from './pages/FormProject';

export const Context = createContext()

const App = () => {

  const [data, setData] = useState(DB)

  const handleAddProject = (newProject) => {
    setData((state) => {
      return {
        projects: [...state.projects, newProject]
      }
    })
  }

  const handleEditProject = () => {
    setData((state) => {
      return {
        projects: [...state.projects]
      }
    })
  }

  const handleDeleteProject = (projectID) => {
    setData((state) => {
      const copiedDB = [...state.projects];
      const deletedProject = copiedDB.filter(project => {
        return project.id !== projectID;
      })
      return {
        projects: [...deletedProject]
      }
    })
  }

  return (
    <ChakraProvider>
      <Router>


        <Box className='app' w='100%' h='100vh' boxSizing='border-box' p='0' m='0' backgroundColor='#E5E5E5'>

          <NavBar />

          <Context.Provider value={{...data, handleAddProject, handleEditProject, handleDeleteProject}}>

              <Switch>

                <Route exact path='/'>
                  <ListProject />
                </Route>
                <Route exact path='/add'>
                  <FormAddEdit />
                </Route>
                <Route exact path='/edit'>
                  <FormAddEdit />
                </Route>

              </Switch>

          </Context.Provider>

        </Box>


      </Router>
    </ChakraProvider>
  );
}

export default App;
