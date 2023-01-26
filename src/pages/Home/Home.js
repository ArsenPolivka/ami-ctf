import { Header } from '../../sections/Header';
import { Intro } from '../../sections/Intro';
import { About } from '../../sections/About';
import { ContactUs } from '../../sections/ContactUs';

import { pageNavigation } from './constants';
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

      <ContactUs />

      <Footer />

    </>
  );
};
