import { ReactComponent as SuccessIcon } from "../../../FinallyScreen/assets/correct.svg";

import styles from './CompletedTask.module.css';

export const CompletedTask = () => {
	return (
			<div className={styles.wrapper}>
				<div className={styles.completed}>
					<div className={styles.icon}>
						<SuccessIcon />
					</div>
					<span className={styles.text}>
					Amazing! This task is already completed!
				</span>
				</div>
			</div>
	)
}
