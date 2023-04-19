import { useContext } from 'react';

import { Header } from '../../sections/Header';
import { Intro } from '../../sections/Intro';
import { About } from '../../sections/About';
import { ContactUs } from '../../sections/ContactUs';
import { RoadMap } from '../../sections/RoadMap';
import { Footer } from '../../sections/Footer';
import { AuthContext } from '../../context/auth/context';

import { pageNavigation, roadMap } from './constants';

import styles from "./Home.module.css";
import { TaskPage } from '../TaskPage/TaskPage';
import {Registration} from '../Registration/Registration';

export const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.body}>
      <Header
        pageNavigation={pageNavigation}
        hasProfile={user}
        hasLogin={!user}
        hasRegistration={!user}
      />

      <Intro />

      <About />

      <RoadMap
        items={roadMap}
      />

      <ContactUs />

      <Footer />

    </div>
  );
};
