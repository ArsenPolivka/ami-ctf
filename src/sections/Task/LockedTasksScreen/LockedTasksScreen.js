import classNames from "classnames";
import { useContext, useEffect, useState } from "react";

import { Button } from "../../../components/Button";
import { ReactComponent as Content } from "./assets/content.svg";

import { AuthContext } from "../../../context/auth/context";
import { EventContext } from "../../../context/event/context";

import styles from './LockedTasksScreen.module.css'

export const LockedTasksScreen = ({ isLocked, onClick }) => {
	const { user } = useContext(AuthContext);
	const { eventStartTime } = useContext(EventContext);

	const [currentDateTime, setCurrentDateTime] = useState(new Date().toString());
	const [leftTime, setLeftTime] = useState(null);
	const [timeLeftString, setTimeLeftString] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDateTime(new Date().toString());
		}, 1000);

		return () => clearInterval(interval);
	}, [])

	useEffect(() => {
		const timeLeft = Date.parse(eventStartTime) - Date.parse(currentDateTime);
		setLeftTime(timeLeft);

		const days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
		const hours = Math.floor((leftTime / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((leftTime / 1000 / 60) % 60);
		const seconds = Math.floor((leftTime / 1000) % 60);

		const timeLeftString =
				`${ days > 0 ? days + ' days' : '' }
			   ${ hours > 0 ? hours + ' hours' : '' } 
			   ${ minutes > 0 ? minutes + ' minutes' : '' } 
			   ${ seconds > 0 ? seconds + ' seconds' : '' }`;

		setTimeLeftString(timeLeftString);
	}, [leftTime, eventStartTime, currentDateTime])

	return (
			<div className={styles.wrapper}>
				<section className={styles.entry}>
					<div className={styles['content-wrapper']}>
						<Content className={styles.content}/>
					</div>

					<div className={styles['button-wrapper']}>
						{user ? (
							<>
								<Button variant='primary-purple'
									rootClassName={classNames(styles.button, isLocked ? styles.locked : null)}
									disabled={isLocked}
									onClick={ onClick }
								>
									Start the quiz
								</Button>

								{ isLocked ? (
									<p className={styles['time-left']}>
										Quiz starts in
										<span className={styles.time}> { timeLeftString }</span>
									</p>
								) : null }
							</>
						) : (
							<div className={styles['btn-group']}>
								<Button
									to={ "/registration" }
									variant="primary"
									rootClassName={styles.btn}
								>
									Register now
								</Button>

								<Button
									to={ "/login" }
									variant="secondary-dark"
									rootClassName={styles.btn}
								>
									Log In
								</Button>
							</div>
						)}
					</div>
				</section>
			</div>
	)
}
