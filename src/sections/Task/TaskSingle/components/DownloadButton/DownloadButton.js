import { Button } from "../../../../../components/Button";

import { ReactComponent as Download } from "../../assets/download-icon.svg";

import { useSingleTask } from "../../../../../hooks/useSingleTask";

import styles from "./DownloadButton.module.css";

export const DownloadButton = ({ id }) => {
	const { data } = useSingleTask(id);

	return (
			<a
					href={data?.file}
					target='_blank'
					rel='noreferrer'
			>
				<Button
						rootClassName={styles['attachment-button']}
						icon={ <Download /> }
						iconClassName={styles['download-icon']}
						variant='attach'
				>
					Download file
				</Button>
			</a>
	)
}
