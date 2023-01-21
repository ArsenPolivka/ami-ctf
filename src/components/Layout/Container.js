import classNames from 'classnames';

import styles from "./Container.module.css";

export const Container = ({ children, rootClassName }) => {
  return (
    <div className={classNames(styles.container, rootClassName)}>
      {children}
    </div>
  );
};
