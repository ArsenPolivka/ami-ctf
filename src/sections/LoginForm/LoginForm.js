import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import toast from 'react-hot-toast';

import { Container } from '../../components/Layout';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { loginUser } from '../../api/user';
import { AuthContext } from '../../context/auth/context';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const [formValues, setFormValues] = useState();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  };

  const notifySuccess = (email) => toast.success(`Successfully logedin ${email}!`);
  const notifyError = (err) => toast.error(`This is an error: ${err}!`);

  const handleSubmit = async (event) => {
    event.preventDefault();

    loginUser(formValues).then((response) => {
      const { email, title } = response;

      if (email) {
        setUser(response);
        notifySuccess(email);
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
