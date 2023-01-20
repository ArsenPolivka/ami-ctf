import { Container } from '../../components/Layout';

import { ContactForm } from './ContactForm';

import './ContactUs.css';

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <Container>
        <ContactForm />
      </Container>
    </div>
  );
};
