import { Outlet } from "react-router-dom";

import { Header } from '../../sections/Header';
import { TaskSidebar } from '../../sections/Task/TaskSidebar';
import { Container } from '../../components/Layout';
import { SidebarConfigProvider } from '../../hooks/useSidebarConfig';
import { Button } from "../../components/Button";
import { ReactComponent as LeftArrowOutlined } from "../../sections/Task/TaskSingle/assets/arrow-left.svg";

import styles from './TaskPage.module.css';
import {Footer} from "../../sections/Footer";

export const TaskPage = () => {
  return (
    <>
      <Header
        hasProfile
      />

      <div className={styles.pageWrapper}>
        <Container>
          <Button
              rootClassName={styles['back-button']}
              icon={ <LeftArrowOutlined /> }
              iconClassName={styles['left-arrow-icon']}
              variant='tertiary'
              to="/tasks"
          >
            Back to task list
          </Button>
          <div className={styles.innerWrapper}>
            <SidebarConfigProvider>
              <TaskSidebar />

              <Outlet />
            </SidebarConfigProvider>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
