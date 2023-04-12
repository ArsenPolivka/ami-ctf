import { Outlet } from "react-router-dom";

import { Header } from '../../sections/Header';
import { TaskSidebar } from '../../sections/TaskSidebar';
import { Container } from '../../components/Layout';
import { SidebarConfigProvider } from '../../hooks/useSidebarConfig';

import styles from './TaskPage.module.css';

export const TaskPage = () => {
  return (
    <>
      <Header
        hasProfile
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
    </>
  );
}
