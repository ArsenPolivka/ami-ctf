import { Link } from 'react-router-dom';

import { mockedTasks } from './mockedTaskCollection';

export const TaskCollection = () => {
  return (
    <div>
      <h2>Task Collection</h2>

      <div>
        {mockedTasks.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/tasks/${id}`}>{title}</Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};
