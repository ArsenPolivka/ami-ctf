import { TaskCollection } from "../TaskCollection";
import { LockedTasksScreen } from "../LockedTasksScreen";

export const TaskEntryScreen = () => {
	// const { eventStatus, setEventStatus, eventLockedStatus } = useContext(EventProvider);
	const eventStatus = false;
  const eventLockedStatus = true;

	return eventStatus ? <TaskCollection /> : <LockedTasksScreen isLocked={eventLockedStatus} />;
}
