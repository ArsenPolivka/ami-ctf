import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Container } from '../../components/Layout';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import styles from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [formValues, setFormValues] = useState();

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // signUp(formValues);
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Sign up</h2>

          <div className={styles.row}>
            <Input
              hideLabel
              inputRootClassName={styles.input}
              name="username"
              label="Username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <Input
              hideLabel
              required
              inputRootClassName={styles.input}
              name="email"
              label="E-mail"
              placeholder="E-mail"
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <Input
              hideLabel
              required
              inputRootClassName={styles.input}
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <Input
              hideLabel
              required
              inputRootClassName={styles.input}
              name="confirmedPassword"
              type="password"
              label="Confirm password"
              placeholder="Confirm password"
              onChange={handleChange}
            />

            <Link
              to="/login"
              className={styles.link}
            >
              Already have an account?
            </Link>
          </div>

          <div className={classNames(styles.row, styles['last-row'])}>
            <Button
              wide
              variant="primary"
              type="submit"
            >
              Register now
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};
