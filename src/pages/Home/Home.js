import { Header } from '../../sections/Header';
import { Intro } from '../../sections/Intro';

const pageNavigation = [
  {
    to: '#about',
    label: 'About',
  },
  {
    to: '#roadmap',
    label: 'Road map',
  },
  {
    to: '#faq',
    label: 'FAQ',
  },
];

export const Home = () => {
  return (
    <>
      <Header
        pageNavigation={pageNavigation}
        hasLogin
        hasRegistration
      />

      <Intro />
    </>
  );
};
