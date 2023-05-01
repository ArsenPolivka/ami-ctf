import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import toast from 'react-hot-toast';

import { Container } from '../../components/Layout';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { registerUser } from '../../api/user';
import { AuthContext } from '../../context/auth/context';
import { Loader } from "../../components/Loader";

import styles from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [formValues, setFormValues] = useState();
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    registerUser(formValues).then((response) => {
      const { email, title, detail } = response;

      if (email) {
        setUser(response);
        notifySuccess(email);
        navigate('/tasks');
      } else {
        const errObj = detail?.reduce((acc, item) => {
          return {
            ...acc,
            [item.cause]: item.message
          }
        }, {});

        notifyError(title);
        setError(errObj);
      }

      setIsLoading(false);
    });
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        { isLoading ? <Loader /> : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <h2 className={styles.title}>Sign up</h2>

              <div className={styles.row}>
                <Input
                    hideLabel
                    required
                    inputRootClassName={styles.input}
                    name="username"
                    label="Username"
                    placeholder="Username"
                    error={error && error.username}
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
                    error={error && error.email}
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
                    error={error && error.password}
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
                    error={error && error.confirmedPassword}
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
        )}
      </Container>
    </div>
  );
};
