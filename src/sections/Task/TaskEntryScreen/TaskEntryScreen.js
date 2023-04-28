import { useContext } from "react";

import { TaskCollection } from "../TaskCollection";
import { LockedTasksScreen } from "../LockedTasksScreen";
import { EventContext } from "../../../context/event/context";

import { PLANNED, STARTED } from './constants';

export const TaskEntryScreen = () => {
	const { eventStatus, setEventStatus } = useContext(EventContext);

	return (eventStatus === STARTED) ? <TaskCollection /> : <LockedTasksScreen onClick={setEventStatus} isLocked={eventStatus === PLANNED} />;
}
