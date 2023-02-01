import { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';
import { Button } from '../../../components/Button';

import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const [formValues, setFormValues] = useState();

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.row}>
        <Input
          hideLabel
          required
          inputRootClassName={styles.input}
          name="name"
          label="Full name"
          placeholder="Full name"
          onChange={handleChange}
        />
      </div>

      <div className={styles.row}>
        <Input
          hideLabel
          required
          inputRootClassName={styles.input}
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>

      <div className={styles.row}>
        <TextArea
          hideLabel
          required
          textareaRootClassName={styles.input}
          name="message"
          label="Enter your message:"
          placeholder="Text message"
          onChange={handleChange}
        />
      </div>

      <div className={classNames(styles.row, styles['last-row'])}>
        <Button
          wide
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
