import { Link, Outlet } from "react-router-dom";

import { Header } from '../../sections/Header';
import { TaskSidebar } from '../../sections/TaskSidebar';
import { Container } from '../../components/Layout';
import { SidebarConfigProvider } from '../../hooks/useSidebarConfig';
import { Button } from "../../components/Button";
import { ReactComponent as LeftArrowOutlined } from "../../sections/TaskSingle/assets/arrow-left.svg";

import styles from './TaskPage.module.css';

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
          >
            <Link
                className={styles['back-link']}
                to="/tasks"
            >
              Back to task list
            </Link>
          </Button>
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
