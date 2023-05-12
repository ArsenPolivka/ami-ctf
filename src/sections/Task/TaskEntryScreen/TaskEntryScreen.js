import { useContext } from "react";

import { TaskCollection } from "../TaskCollection";
import { LockedTasksScreen } from "../LockedTasksScreen";
import { EventContext } from "../../../context/event/context";

import { PLANNED } from './constants';

export const TaskEntryScreen = () => {
	const { eventDetails, isStarted, setIsStarted } = useContext(EventContext);

	const handleStartEvent = () => {
		setIsStarted(true);
	}

	return isStarted ? <TaskCollection /> : <LockedTasksScreen onClick={handleStartEvent} isLocked={!eventDetails?.status || eventDetails?.status === PLANNED} />;
}
