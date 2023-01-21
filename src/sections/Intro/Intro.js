import classNames from 'classnames';

import { TagsList } from './TagsList/TagsList';
import img from './assets/intro-decoration.png';

import { Container } from '../../components/Layout';
import { Button } from '../../components/Button';

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
              <Button variant="primary" rootClassName={styles.btn}>Register now</Button>

              <Button variant="secondary" rootClassName={styles.btn}>Read more</Button>
            </div>
          </div>

          <div className={classNames(styles.column, styles['column--second'])}>
            <img className={styles.decoration} src={img} alt="young man coding on laptop" />
          </div>
        </div>
      </Container>
    </section>
  );
};
