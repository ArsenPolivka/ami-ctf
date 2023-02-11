import { Header } from '../../sections/Header';
import { Intro } from '../../sections/Intro';
import { About } from '../../sections/About';
import { ContactUs } from '../../sections/ContactUs';
import { RoadMap } from '../../sections/RoadMap';

import { pageNavigation, roadMap } from './constants';
import {Footer} from "../../sections/Footer";

export const Home = () => {
  return (
    <>
      <Header
        pageNavigation={pageNavigation}
        hasLogin
        hasRegistration
      />

      <Intro />

      <About />

      <RoadMap
        items={roadMap}
      />

      <ContactUs />

      <Footer />

    </>
  );
};
