import React, {useContext} from 'react';

import { Context } from './context/context';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react"

import EditProject from './pages/EditProject';
import AddProject from './pages/AddProject';
import ListProject from './pages/ListProject';

import NavBar from './components/NavBar/NavBar';

function App() {

  const DB = useContext(Context)

  return (

    <Router>

      <ChakraProvider>

        <div className="App">

          <NavBar />

          <Context.Provider value={DB.projects}>

            <Switch>

              <Route exact path='/' component={ListProject} />
              <Route exact path='/add' component={AddProject} />
              <Route exact path='/edit' component={EditProject} />

            </Switch>
          
          </Context.Provider>

        </div>

      </ChakraProvider>

    </Router>
  );
}

export default App;
