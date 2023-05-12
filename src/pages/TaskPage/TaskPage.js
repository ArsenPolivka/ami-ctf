import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Container } from '../../components/Layout';
import { Header } from '../../sections/Header';
import { TaskSidebar } from '../../sections/Task/TaskSidebar';
import { Footer } from "../../sections/Footer";
import { Button } from "../../components/Button";

import { ReactComponent as LeftArrowOutlined }  from "../../sections/Task/TaskSingle/assets/arrow-left.svg";

import { AuthContext } from "../../context/auth/context";
import { RatingContext } from '../../context/rating/context';
import { SidebarConfigProvider } from '../../hooks/useSidebarConfig';
import { useUserStatistics } from '../../hooks/useUserStatistics';

import styles from './TaskPage.module.css';

export const TaskPage = () => {
  const { user } = useContext(AuthContext);
  const { users } = useContext(RatingContext);
  const { stats, isLoading } = useUserStatistics(user.id);
  const location = useLocation();

  return (
    <>
      <Header
        hasProfile={Boolean(user)}
        hasProfileTasks={Boolean(user)}
        hasLogout={Boolean(user)}
      />

      <div className={styles.pageWrapper}>
        <Container>
          {location.pathname.match(/^\/tasks\/(.+)/) ? (
              <Button
                  rootClassName={styles['back-button']}
                  icon={ <LeftArrowOutlined /> }
                  iconClassName={styles['left-arrow-icon']}
                  variant='tertiary'
                  to="/tasks"
              >
                Back to task list
              </Button>
          ) : null}
          <div className={styles.innerWrapper}>
            <SidebarConfigProvider>
              <TaskSidebar points={stats} users={users} isLoading={isLoading} />

              <Outlet />
            </SidebarConfigProvider>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
