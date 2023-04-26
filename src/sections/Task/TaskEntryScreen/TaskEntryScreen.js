import { useContext } from "react";

import { TaskCollection } from "../TaskCollection";
import { LockedTasksScreen } from "../LockedTasksScreen";
import { EventProvider } from "../../../context/event/EventProvider";

export const TaskEntryScreen = () => {
	// const { eventStatus, setEventStatus } = useContext(EventProvider);

	return false ? <TaskCollection /> : <LockedTasksScreen />;
}
