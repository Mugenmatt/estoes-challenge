import { v4 as uuidv4 } from 'uuid';

export const DB = {
  projects: [
      {
        id: uuidv4(),
        project_name: 'Project Esto Fue',
        project_created_at: 'Creation date:  09/09/2020',
        description: 'This is a description',
        project_manager_name: 'Juan',
        project_manager_avatar: 'http://a.wordpress.com/avatar/unknown-128.jpg',
        assigned_to_name: 'Sebastian',
        assigned_to_avatar: 'http://a.wordpress.com/avatar/unknown-128.jpg',
        status: 'Enabled',
      },
      {
        id: uuidv4(),
        project_name: 'Project Esto Es',
        project_created_at: 'Creation date:  21/12/2020',
        description: 'This is a description',
        project_manager_name: 'Pepe',
        project_manager_avatar: 'http://a.wordpress.com/avatar/unknown-128.jpg',
        assigned_to_name: 'Matias',
        assigned_to_avatar: 'http://a.wordpress.com/avatar/unknown-128.jpg',
        status: 'Enabled',
      },
      {
        id: uuidv4(),
        project_name: 'Project Esto Sera',
        project_created_at: 'Creation date:  15/03/2020',
        description: 'This is a description',
        project_manager_name: 'Julia',
        project_manager_avatar: 'http://a.wordpress.com/avatar/unknown-128.jpg',
        assigned_to_name: 'Pedro',
        assigned_to_avatar: 'http://a.wordpress.com/avatar/unknown-128.jpg',
        status: 'Enabled',
      }
    ]}
