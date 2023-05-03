import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { Header } from '../../sections/Header';
import { TaskSidebar } from '../../sections/Task/TaskSidebar';
import { Container } from '../../components/Layout';
import { SidebarConfigProvider } from '../../hooks/useSidebarConfig';
import { Footer } from "../../sections/Footer";
import { AuthContext } from "../../context/auth/context";

import styles from './TaskPage.module.css';

export const TaskPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Header
        hasProfile={user}
        hasProfileTasks={user}
      />

      <div className={styles.pageWrapper}>
        <Container>
          <div className={styles.innerWrapper}>
            <SidebarConfigProvider>
              <TaskSidebar />

              <Outlet />
            </SidebarConfigProvider>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
