import { v4 as uuidv4 } from 'uuid';
import default_image from '../assets/img/default_image.jpeg'

export const DB = {
  projects: [
      {
        id: uuidv4(),
        project_name: 'Project Esto Ha Sido',
        project_created_at: 'Creation date:  09/09/2020',
        description: 'This is a description',
        project_manager_name: 'Juan',
        project_manager_avatar: default_image,
        assigned_to_name: 'Sebastian',
        assigned_to_avatar: default_image,
        status: 'Enabled',
      },
      {
        id: uuidv4(),
        project_name: 'Project Esto Es',
        project_created_at: 'Creation date:  21/12/2020',
        description: 'This is a description',
        project_manager_name: 'Pepe',
        project_manager_avatar: default_image,
        assigned_to_name: 'Matias',
        assigned_to_avatar: default_image,
        status: 'Enabled',
      },
      {
        id: uuidv4(),
        project_name: 'Project Esto Sera',
        project_created_at: 'Creation date:  15/03/2020',
        description: 'This is a description',
        project_manager_name: 'Julia',
        project_manager_avatar: default_image,
        assigned_to_name: 'Pedro',
        assigned_to_avatar: default_image,
        status: 'Enabled',
      }
    ]}
