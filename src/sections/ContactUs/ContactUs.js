import classNames from 'classnames';

import { Container } from '../../components/Layout';

import { ContactForm } from './ContactForm';
import img from './assets/illustration.png';

import styles from './ContactUs.module.css';

export const ContactUs = () => {
  return (
    <section id="contact-us" className={styles['contact-us']}>
      <Container>
        <div className={styles['contacts-us-wrapper']}>
          <div className={classNames(styles.column, styles['body-column'])}>
            <h2 className={styles.title}>Have a question? <span className={styles.highlighted}>Contact us!</span></h2>

            <img className={styles.img} src={img} alt="women asking question to men" />
          </div>

          <div className={classNames(styles.column, styles['form-column'])}>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
