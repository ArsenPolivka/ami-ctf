import classNames from 'classnames';
import { useContext } from 'react';
import { Link } from 'react-scroll/modules';

import img from './assets/intro-decoration.png';

import { TagsList } from './TagsList/TagsList';
import { Container } from '../../components/Layout';
import { Button } from '../../components/Button';
import { ScrollDown } from "../../components/ScrollDown";
import { AuthContext } from '../../context/auth/context';

import styles from './Intro.module.css';

export const Intro = () => {
  const { user } = useContext(AuthContext);

  return (
    <section id="intro" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles['mobile-wrapper']}>

            <div className={classNames(styles.column, styles['column--first'])}>
              <TagsList rootClassName={styles['tags-list-wrapper']} />

              <h1 className={styles.title}>Capture your flag now!</h1>

              <p className={styles.text}>
                Ignite Your Cyber Skills: Engage, Learn, and Triumph
              </p>

              <div className={styles['btn-group']}>
                <div className={styles['button-wrapper']}>
                  <Button
                    to={ user ? "/tasks" : "/registration" }
                    variant="primary"
                    rootClassName={styles.btn}
                  >
                    { user ? "Go to quiz" : "Register now" }
                  </Button>
                </div>

                <Link to="about"
                  className={styles['btn-dark']}
                >
                  <Button variant="secondary-dark"
                    rootClassName={styles['button-dark']}
                  >
                    Read more
                  </Button>
                </Link>
                <Link to="about"
                  className={styles['btn-second']}
                >
                  <Button variant="secondary">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className={classNames(styles.column, styles['column--second'])}>
            <img
              className={styles.decoration}
              src={img}
              alt="young man coding on laptop"
            />
          </div>
        </div>
        <Link
          to="about"
          className={styles.scroll}
        >
          <ScrollDown />
        </Link>
      </Container>
    </section>
  );
};
