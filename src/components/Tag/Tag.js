import classNames from 'classnames';

import styles from './Tag.module.css';

export const Tag = ({ children, rootClassName }) => {
  return (
    <div className={classNames(
      styles.tag,
      rootClassName,
    )}
    >
      {children}
    </div>
  );
};
