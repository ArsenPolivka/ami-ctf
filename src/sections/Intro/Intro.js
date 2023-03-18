import classNames from 'classnames';
import { Link } from 'react-scroll/modules';

import img from './assets/intro-decoration.png';

import { TagsList } from './TagsList/TagsList';
import { Container } from '../../components/Layout';
import { Button } from '../../components/Button';
import { ScrollDown } from "../../components/ScrollDown";

import styles from './Intro.module.css';

export const Intro = () => {
  return (
    <section id="intro" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={classNames(styles.column, styles['column--first'])}>
            <TagsList rootClassName={styles['tags-list-wrapper']} />

            <h1 className={styles.title}>Capture your flag now!</h1>

            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Duis aenean condimentum nullam
            </p>

            <div className={styles['btn-group']}>
              <Button
                  to="/registration"
                  variant="primary"
                  rootClassName={styles.btn}
              >
                Register now
              </Button>


              <Link to="about"
                    className={styles.btn}
              >
                <Button variant="secondary">
                    Read more
                </Button>
              </Link>
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
        <Link to="about">
          <ScrollDown />
        </Link>
      </Container>
    </section>
  );
};
