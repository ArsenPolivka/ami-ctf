import classNames from "classnames";

import { Button } from "../../../components/Button";
import { ReactComponent as Content } from "./assets/content.svg";

import styles from './LockedTasksScreen.module.css'

export const LockedTasksScreen = ({ isLocked, onClick }) => {
	return (
			<div className={styles.wrapper}>
				<section className={styles.entry}>
					<div className={styles.content}>
						<Content />
					</div>

					<div className={styles['button-wrapper']}>
						<Button variant='primary-purple'
						        rootClassName={classNames(styles.button, isLocked ? styles.locked : null)}
						        disabled={isLocked}
						        onClick={ onClick }
						>
							Start the quiz
						</Button>

						{ isLocked ? (
								<p className={styles['time-left']}>
									Quiz will be started
									<span className={styles.time}> soon</span>
								</p>
						) : null }
					</div>
				</section>
			</div>
	)
}
