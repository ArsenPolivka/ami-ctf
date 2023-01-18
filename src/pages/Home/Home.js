import { Header } from '../../sections/Header';
import { Intro } from '../../sections/Intro';
import { ContactUs } from '../../sections/ContactUs';

import { pageNavigation } from './constants';

export const Home = () => {
  return (
    <>
      <Header
        pageNavigation={pageNavigation}
        hasLogin
        hasRegistration
      />

      <Intro />

      <ContactUs />
    </>
  );
};
