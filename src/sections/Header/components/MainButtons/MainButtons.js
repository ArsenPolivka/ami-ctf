import { useContext } from "react";
import { Link, useMatch } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../../../../context/auth/context";
import { Button } from "../../../../components/Button";
import { HeaderAvatar } from "../HeaderAvatar/HeaderAvatar";
import { LogoutButton } from "../LogoutButton";

import styles from "./MainButtons.module.css";

export const MainButtons = ({ hasProfile, hasLogin, hasRegistration, hasLogout }) => {
    const { user } = useContext(AuthContext);
    const matchTasks = useMatch('/tasks');
    const location = useLocation();

    if (location.pathname !== '/') {
        document.body.style.overflow = "";
    }

    return (
        <>
            <div className={styles.wrapper}>
                {(user && !matchTasks) ? (
                    <div className={styles['quiz-button-wrapper']}>
                        <Button
                            to="/tasks"
                            variant="primary"
                            rootClassName={styles['quiz-button']}
                        >
                            Go to quiz
                        </Button>
                    </div>
                ) : null}

                {hasProfile ? (
                    <div className={styles['profile-wrapper']}>
                        <Link
                            to="/profile"
                            className={classNames(styles['first-button'], styles.profileLink)}
                        >
                            { user.username }

                            <HeaderAvatar
                                url={user.avatarLink?.url}
                                rootClassName={styles['header-avatar']}
                            />
                        </Link>

                        <LogoutButton />
                    </div>
                ) : null}

                {hasLogout ? (
                    <LogoutButton />
                ) : null}
            </div>

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
