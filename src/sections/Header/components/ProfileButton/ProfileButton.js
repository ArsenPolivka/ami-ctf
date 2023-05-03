import { Link } from "react-router-dom";
import { useContext } from "react";
import classNames from "classnames";

import { HeaderAvatar } from "../HeaderAvatar/HeaderAvatar";
import { AuthContext } from "../../../../context/auth/context";

import styles from "../MainButtons/MainButtons.module.css";

export const ProfileButton = () => {
	const { user } = useContext(AuthContext);

	return (
			<Link
					to="/profile"
					className={classNames(styles['first-button'], styles.profileLink)}
			>
				<span className={styles.username}>{ user.username }</span>

				<HeaderAvatar
						url={user.avatarLink?.url}
						rootClassName={styles['header-avatar']}
				/>
			</Link>
	)
}