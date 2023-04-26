import { TaskCollection } from "../TaskCollection";
import { LockedTasksScreen } from "../LockedTasksScreen";

export const TaskEntryScreen = ({ isUserEnrolled }) => {
	return false ? <TaskCollection /> : <LockedTasksScreen />;
}
