import { Outlet } from "react-router-dom";

import { TaskSidebar } from '../../sections/TaskSidebar';

export const TaskPage = () => {
  return (
    <div>
      <TaskSidebar />

      <Outlet />
    </div>
  );
}
