import classNames from 'classnames';

import { Container } from '../../components/Layout';

import styles from './RoadMap.module.css';

export const RoadMap = ({ items }) => {
  return (
    <section className={styles.roadMap} id="road-map">
      <Container>
        <h2 className={styles.title}>Road <span className={styles.highlighted}>map</span></h2>

        {items.length ? (
          <ul className={styles.list}>
            {items.map(({
              id,
              label,
              imgSrc,
              alt,
            }) => {
              return (
                <li key={id} className={classNames(styles.item, styles[`item-${id}`])}>
                  <img className={styles.img} src={imgSrc} alt={alt} />

                  <h2 className={styles.label}>{label}</h2>
                </li>
              )
            })}
          </ul>
        ) : null}
      </Container>
    </section>
  );
};
