import { Button } from "../../../../../components/Button";

import { ReactComponent as Download } from "../../assets/download-icon.svg";

import styles from "./DownloadButton.module.css";

export const DownloadButton = ({ href }) => {
	return (
		<Button
			href={href}
			rootClassName={styles['attachment-button']}
			icon={ <Download /> }
			iconClassName={styles['download-icon']}
			variant='attach'
			target='_blank'
			rel='noreferrer'
			disabled={!href}
		>
			Download file
		</Button>
	)
}
