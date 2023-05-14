import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { useUserStatistics } from "../../../hooks/useUserStatistics";

import { Button } from "../../../components/Button";
import { Loader } from "../../../components/Loader";

import { ReactComponent as AllCorrect } from "./assets/correct.svg";
import { ReactComponent as HalfCorrect } from "./assets/correct_blue.svg";
import { ReactComponent as NotCorrect } from "./assets/invalid.svg";

import { AuthContext } from "../../../context/auth/context";
import { EventContext } from "../../../context/event/context";

import styles from './FinallyScreen.module.css';

export const FinallyScreen = () => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const { eventDetails } = useContext(EventContext);

	const { stats, isLoading } = useUserStatistics(user?.id);

	let tasksNumber = eventDetails?.totalNumberOfTasks;
	let tasksDone = stats?.tasksDone;

	let greetings, icon, btnClass, infoClass;

	if (tasksDone === tasksNumber) {
		greetings = 'Congratulations!';
		icon = <AllCorrect />;
		btnClass = 'btn-correct';
		infoClass = 'info-correct';
	} else if (tasksDone / tasksNumber >= 0.4) {
		greetings = 'Nice try!';
		icon = <HalfCorrect />;
		btnClass = 'btn-half-correct';
		infoClass = 'info-half-correct';
	} else {
		greetings = 'Don’t give up!';
		icon = <NotCorrect />;
		btnClass = 'btn-not-correct';
		infoClass = 'info-incorrect'
	}

	const handleButton = () => navigate('/tasks');

	return (
			<div className={styles.wrapper}>
				{isLoading ? <Loader /> : (
						<section className={styles.finally}>
							<div className={styles['content-wrapper']}>
								<div className={styles['icon-wrapper']}>
									{ icon }
								</div>
								<span className={classNames(styles.information, styles[infoClass])}>
							{`${greetings} ${tasksDone}/${tasksNumber} tasks had done!`}
						</span>
							</div>
							{tasksDone !== tasksNumber && eventDetails.status !== 'FINISHED' ? (
									<Button
											variant='primary'
											rootClassName={classNames(styles.button, styles[btnClass])}
											onClick={handleButton}
									>
										Continue quiz
									</Button>
							) : null}
						</section>
				)}
			</div>
	)
}
