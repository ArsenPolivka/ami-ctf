import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Container } from '../../components/Layout';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const [formValues, setFormValues] = useState();
  const { login } = useAuth();

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    login(formValues);
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Sign in</h2>

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

            <Link
              to="/registration"
              className={styles.link}
            >
              Doesn't have an accout yet?
            </Link>
          </div>

          <div className={classNames(styles.row, styles['last-row'])}>
            <Button
              wide
              variant="primary"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};
