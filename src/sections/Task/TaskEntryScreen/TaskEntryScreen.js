import { useContext } from "react";

import { TaskCollection } from "../TaskCollection";
import { LockedTasksScreen } from "../LockedTasksScreen";
import { EventContext } from "../../../context/event/context";

import { PLANNED, STARTED } from './constants';

export const TaskEntryScreen = () => {
	const { eventDetails, setEventDetails } = useContext(EventContext);

	return (eventDetails?.status === STARTED) ? <TaskCollection /> : <LockedTasksScreen onClick={setEventDetails} isLocked={!eventDetails?.status || eventDetails?.status === PLANNED} />;
}
