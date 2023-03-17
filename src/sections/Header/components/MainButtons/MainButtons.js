import { Link } from "react-router-dom";
import classNames from "classnames";

import { ReactComponent as LogoutIcon } from './assets/logout.svg';
import { Button } from "../../../../components/Button";

import styles from "./MainButtons.module.css";

export const MainButtons = ({ hasProfile, hasLogin, hasRegistration }) => {
    return (
        <>
            {hasProfile ? (
                <>
                    <Link
                        to="/profile"
                        className={classNames(styles['first-button'], styles.profileLink)}
                    >
                        ralph_edwards19
                        <span className={styles.userIcon}></span>
                    </Link>

                    <Button
                        variant="secondary"
                        hiddenLabel
                        icon={<LogoutIcon />}
                        iconClassName={styles.logoutIcon}
                    >
                        Logout
                    </Button>
                </>
            ) : null}

            {hasLogin ? (
                <Button
                    to="/login"
                    variant="secondary"
                    rootClassName={styles['first-button']}
                >
                    Login
                </Button>
            ) : null}

            {hasRegistration ? (
                <Button
                    to="/registration"
                    variant="primary"
                >
                    Sign Up
                </Button>
            ) : null}
        </>
    )
}
