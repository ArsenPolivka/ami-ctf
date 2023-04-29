import { useState } from 'react';
import toast from 'react-hot-toast';
import classNames from 'classnames';

import { Input } from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';
import { Button } from '../../../components/Button';
import { ALL_NAMES } from "../../../api/constants";
import { sendContactUsRequest } from "../../../api/feebdack";

import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const [formValues, setFormValues] = useState();

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  };

    const notifySuccess = () => toast.success('We recieved your message!');

    const notifyError = (errorMessage) => toast.error(`Error occurred: ${errorMessage}!`);

    const handleSubmit = (event) => {
        event.preventDefault();

        sendContactUsRequest(formValues).then((response) => {
            const { title } = response;

            if (title) {
                notifyError(title)
            } else {
                notifySuccess();
            }
        });
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.row}>
        <Input
          hideLabel
          required
          inputRootClassName={styles.input}
          name={ALL_NAMES.FULL_NAME}
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
          name={ALL_NAMES.EMAIL}
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
          name={ALL_NAMES.BODY}
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
