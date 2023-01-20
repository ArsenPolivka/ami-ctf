import { Container } from '../../components/Layout';

import { ContactForm } from './ContactForm';
import img from './assets/illustration.png';

import './ContactUs.css';

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <Container>
        <div className="contacts-us-wrapper">
          <div className="column body-column">
            <h2 className="title">Have a question? <span className="highlighted">Contact us!</span></h2>

            <img className="illustration" src={img} alt="women asking question to men" />
          </div>

          <div className="column form-column">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
};
