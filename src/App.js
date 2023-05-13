import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { NoMatch } from './pages/404';
import { TaskPage } from './pages/TaskPage';
import { TaskEntryScreen } from "./sections/Task/TaskEntryScreen/TaskEntryScreen";

import { AuthProvider } from './context/auth/AuthProvider';
import { EventProvider } from './context/event/EventProvider';
import { TaskProvider } from './context/task/TaskProvider';
import { RatingProvider } from './context/rating/RatingProvider';
import { TaskSingle } from './sections/Task/TaskSingle';

export default function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <TaskProvider>
          <RatingProvider>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />

                <Route path="/tasks" element={<TaskPage />}>
                  <Route index element={<TaskEntryScreen />} />
                  <Route path=":id" element={<TaskSingle />} />
                </Route>

              <Route path="*" element={<NoMatch />} />
            </Routes>
            <Toaster
              toastOptions={{
                className: 'toaster',
                position: 'top-right',
                success: {
                  style: {
                    background: '#d3f6d7',
                    color: '#29D13A',
                  },
                },
                error: {
                  style: {
                    background: '#FFEFEF',
                    color: '#CF5454',
                  },
                },
              }}
            />
          </RatingProvider>
        </TaskProvider>
      </EventProvider>
    </AuthProvider>
  );
}
