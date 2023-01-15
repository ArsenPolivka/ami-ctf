import { Header } from '../../sections/Header';

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
    </>
  );
};
