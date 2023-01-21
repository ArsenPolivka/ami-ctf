import classNames from 'classnames';

import { Tag } from '../../../components/Tag';

import styles from './TagsList.module.css';

export const TagsList = ({ rootClassName }) => {
  return (
    <ul className={classNames(
      styles['tags-list'],
      rootClassName,
    )}
    >
      <li className={styles['tags-item']}>
        <Tag>#IT</Tag>
      </li>

      <li className={styles['tags-item']}>
        <Tag>#Students</Tag>
      </li>

      <li className={styles['tags-item']}>
        <Tag>#Ami</Tag>
      </li>
    </ul>
  );
};
