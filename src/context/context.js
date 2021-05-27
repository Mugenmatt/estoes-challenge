import React, {createContext} from 'react';

const DB = {
    projects: [
      {
        project_name: 'Project Esto Es',
        description: 'This is a description',
        project_manager: 'Juan',
        assigned_to: 'Pedro',
        status: 'Enabled'
      },
      {
        project_name: 'Project Esto Fue',
        description: 'This is a description',
        project_manager: 'Juan',
        assigned_to: 'Pepito',
        status: 'Enabled'
      },
      {
        project_name: 'Project Esto Sera',
        description: 'This is a description',
        project_manager: 'Juan',
        assigned_to: 'Sebastian',
        status: 'Enabled'
      },
    ]
  }

  export const Context = createContext(DB);