import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Container } from '../../components/Layout';
import { Header } from '../../sections/Header';
import { TaskSidebar } from '../../sections/Task/TaskSidebar';
import { Footer } from "../../sections/Footer";
import { AuthContext } from "../../context/auth/context";
import { SidebarConfigProvider } from '../../hooks/useSidebarConfig';
import { useUserStatistics } from '../../hooks/useUserStatistics';

import styles from './TaskPage.module.css';

export const TaskPage = () => {
  const { user } = useContext(AuthContext);
  const { stats, isLoading } = useUserStatistics(user.id);

  return (
    <div>
      <Header
        hasProfile={Boolean(user)}
        hasProfileTasks={Boolean(user)}
        hasLogout={Boolean(user)}
      />

      <div className={styles.pageWrapper}>
        <Container>
          <div className={styles.innerWrapper}>
            <SidebarConfigProvider>
              <TaskSidebar points={stats} isLoading={isLoading} />

              <Outlet />
            </SidebarConfigProvider>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
