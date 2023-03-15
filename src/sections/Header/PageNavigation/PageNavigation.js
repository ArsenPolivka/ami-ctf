import classNames from 'classnames';
import { Link } from 'react-scroll/modules';

import styles from './PageNavigation.module.css';

export const PageNavigation = ({ navList, rootClassName, onClose }) => {
  return (
    <ul className={classNames(
      styles['page-navigation'],
      rootClassName,
    )}
    >
      {navList.map(({ to, label, id }) => {
        return (
          <li
              className={styles['list-item']}
              key={id}
          >
            <Link
                className={styles.link}
                to={to}
                onClick={onClose}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
