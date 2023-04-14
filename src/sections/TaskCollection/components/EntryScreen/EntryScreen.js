import classNames from "classnames";

import { Button } from "../../../../components/Button";
import { ReactComponent as Content } from "./assets/content.svg";

import styles from './EntryScreen.module.css'

export const EntryScreen = ({ isLocked, onClick }) => {
	return (
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
								Quiz will be started in
								<span className={styles.time}> 9 days 15 hours</span>
							</p>
					) : null }
				</div>
			</section>
	)
}
