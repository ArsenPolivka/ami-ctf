import classNames from "classnames";
import { useContext } from "react";

import { Button } from "../../../components/Button";
import { ReactComponent as Content } from "./assets/content.svg";

import { AuthContext } from "../../../context/auth/context";

import styles from './LockedTasksScreen.module.css'

export const LockedTasksScreen = ({ isLocked, onClick }) => {
	const { user } = useContext(AuthContext);

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
										Quiz will be started soon!
										<span className={styles.time}></span>
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
