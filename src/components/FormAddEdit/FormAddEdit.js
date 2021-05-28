import React, {useContext, useState, useEffect} from 'react';
import {Context} from '../../App'
import { v4 as uuidv4 } from 'uuid';
import Lottie from 'react-lottie';
import Gear from '../../assets/lottie/gear.json';
import {
    FormControl,
    FormLabel,
    Input,
    Select
  } from "@chakra-ui/react"
  import { Box, Heading } from '@chakra-ui/layout';
  import {useHistory} from 'react-router-dom';
import './index.css';

const FormAddEdit = () => {

    const { projects, handleAddProject, handleEditProject } = useContext(Context)
    const [fakeLoading, setFakeLoading] = useState(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Gear
    }

    useEffect(() => {
        setTimeout(() => {
            setFakeLoading(false) 
        }, 1000);
        
         return () => {
        
         }
    }, [])

    const history = useHistory()

    let idSelected = history.location.state

    if(history.location.pathname === '/add') {
        idSelected = undefined;
    } else {
        idSelected = history.location.state.id
    }
    
    const projectSelected = projects.find(project => {
        return project.id === idSelected;
    })
    
    const [newProject, setNewProject] = useState({
        id: idSelected !== undefined ? idSelected : uuidv4(),
        project_name: idSelected !== undefined ? projectSelected.project_name : '',
        project_created_at: idSelected !== undefined ? projectSelected.project_created_at : 'Creation date: ' + new Date().toLocaleDateString(),
        description: idSelected !== undefined ? projectSelected.description : '',
        project_manager_name: idSelected !== undefined ? projectSelected.project_manager_name : '',
        project_manager_avatar: idSelected !== undefined ? projectSelected.project_manager_avatar : 'http://a.wordpress.com/avatar/unknown-128.jpg' 
        ,
        assigned_to_name: idSelected !== undefined ? projectSelected.assigned_to_name : '',
        assigned_to_avatar: idSelected !== undefined ? projectSelected.assigned_to_avatar : 'http://a.wordpress.com/avatar/unknown-128.jpg',
        status: idSelected !== undefined ? projectSelected.status : '',
    })
    
    const handleProjectName = (e) => {
        const newName = e.target.value;
        if(history.location.pathname === '/edit'){
            return setNewProject({...newProject, project_name: newName})
        } else {
            let currentDate = new Date().toLocaleDateString();
            return setNewProject({...newProject, project_name: newName, project_created_at: 'Creation date: ' + currentDate})
        }
    }
    
    const handleDescription = (e) => {
        if(history.location.pathname === '/edit'){
            const newDescription = e.target.value;
            return setNewProject({...newProject, description: newDescription})
        } else {
            const newDescription = e.target.value;
            return setNewProject({...newProject, description: newDescription})
        }
    }
    
    const handleProjectManager = (e) => {
        if(history.location.pathname === '/edit'){
            const newProjManager = e.target.value;
            return setNewProject({...newProject, project_manager_name: newProjManager})
        } else {
            const newManager = e.target.value;
            return setNewProject({...newProject, project_manager_name: newManager})
        }
    }
    
    const handleAssignedTo = (e) => {
        if(history.location.pathname === '/edit'){
            const newAssignedTo = e.target.value;
            return setNewProject({...newProject, assigned_to_name: newAssignedTo})
        } else {
            const newAssignTo = e.target.value;
            return setNewProject({...newProject, assigned_to_name: newAssignTo})
        }
    }
    
    const handleStatus = (e) => {
        if(history.location.pathname === '/edit'){
            const newStatus = e.target.value;
            return setNewProject({...newProject, status: newStatus})
        } else {
            const newStatus = e.target.value;
            return setNewProject({...newProject, status: newStatus})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(history.location.pathname === '/edit'){
            const newData = projects.filter(data => {
                return data.id === newProject.id ? Object.assign(data,newProject) : data;
            })
            handleEditProject(newData)
            return history.push('/')
        } else {
            handleAddProject(newProject)
            return history.push('/')
        }
    }

    return (
        <Box className='form-box'  backgroundColor='#fff' >

            <Heading mb='4%'>{idSelected ? 'Edit Project' : 'New Project'}</Heading>

            {
                fakeLoading ?
                <Box className='box-lottie'> <Lottie className='lottie' options={{...defaultOptions}}/></Box>
                :  <form onSubmit={handleSubmit}>

                    <FormControl id="project-name" mb='3%'>
                        <FormLabel color='#262626' m='2px 0'>Project Name</FormLabel>
                        <Input type="text" value={newProject.project_name} onChange={handleProjectName} />
                    </FormControl>

                    <FormControl id="description" mb='3%'>
                        <FormLabel color='#262626' m='2px 0'>Description</FormLabel>
                        <Input type="text" value={newProject.description} onChange={handleDescription} />
                    </FormControl>

                    <FormControl id="project-manager" mb='3%'>
                        <FormLabel color='#262626' m='2px 0'>Project Manager</FormLabel>
                        <Select placeholder={!idSelected && 'Select a person'} onChange={handleProjectManager}>
                            {
                                projects.map(data => {
                                    return <option key={data.id}> {data.project_manager_name} </option>
                                })
                            }
                        </Select>

                    </FormControl>

                    <FormControl id="assigned-to" mb='3%'>
                        <FormLabel color='#262626' m='2px 0'>Assigned to</FormLabel>
                        <Select placeholder={!idSelected && 'Select a person'} onChange={handleAssignedTo}>
                            {
                                projects.map(data => {
                                    return <option key={data.id}> {data.assigned_to_name} </option>
                                })
                            }
                        </Select>

                    </FormControl>

                    <FormControl id="status" mb='3%'>
                        <FormLabel color='#262626' m='2px 0'>Status</FormLabel>
                        <Select placeholder={!idSelected && 'Select a status'} onChange={handleStatus}>
                            <option>Enabled</option>
                            <option>Disabled</option>
                        </Select>
                    </FormControl>

                    <Input 
                        className='submit-btn' 
                        width={'20%'} 
                        type='submit' 
                        value={idSelected ? 'Save Changes' : 'Create Project'}
                        width= '20%'
                        color='#fff '
                        padding= '8px 16px' 
                        backgroundColor= '#F5222D '
                        borderRadius= '4px'
                        cursor='pointer'
                    />

                </form>
            }
        </Box>

    );
};

export default FormAddEdit;