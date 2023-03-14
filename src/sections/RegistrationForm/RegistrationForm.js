import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import toast from 'react-hot-toast';

import { Container } from '../../components/Layout';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { registerUser } from '../../api/user';
import { AuthContext } from '../../context/auth/context';

import styles from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [formValues, setFormValues] = useState();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  };

  const notifySuccess = (email) => toast.success(`Successfully registered ${email}!`);
  const notifyError = (err) => toast.error(`This is an error: ${err}!`);

  const handleSubmit = (event) => {
    event.preventDefault();

    registerUser(formValues).then(({ user, title }) => {
      if (user) {
        setUser(user);
        notifySuccess(user.email);
        navigate('/profile');
      } else {
        notifyError(title);
      }
    });
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
