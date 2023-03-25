import { useParams, Link } from 'react-router-dom';

export const TaskSingle = () => {
  const { id } = useParams();

  return (
    <div>
      <div><Link to="/tasks">Back to task list</Link></div>

      Task Single #{id}
    </div>
  );
}
