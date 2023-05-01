import { ReactComponent as LoaderIcon} from './loader.svg';

import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <LoaderIcon className={styles.icon} />
    </div>
  );
}
