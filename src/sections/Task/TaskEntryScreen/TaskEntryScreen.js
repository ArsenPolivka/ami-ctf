import { useContext } from "react";

import { TaskCollection } from "../TaskCollection";
import { LockedTasksScreen } from "../LockedTasksScreen";
import { EventContext } from "../../../context/event/context";

export const TaskEntryScreen = () => {
	const { eventStatus, setEventStatus, eventLockedStatus } = useContext(EventContext);

	return eventStatus ? <TaskCollection /> : <LockedTasksScreen onClick={setEventStatus} isLocked={eventLockedStatus} />;
}
