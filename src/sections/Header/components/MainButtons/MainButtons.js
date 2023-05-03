import { useContext } from "react";
import { Link, useNavigate, useMatch } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../../../../context/auth/context";

import { ReactComponent as LogoutIcon } from './assets/logout.svg';
import { Button } from "../../../../components/Button";
import { logoutUser } from "../../../../api/user";

import styles from "./MainButtons.module.css";
import {Avatar} from "../../../ProfileBlock/components/Avatar";

export const MainButtons = ({ hasProfile, hasLogin, hasRegistration }) => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const matchTasks = useMatch('/tasks');
    const location = useLocation();

    const handleLogout = async () => {
        await logoutUser();
        setUser(null);

        navigate("/login");
    };

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

                            <Avatar isHeader={true}
                                    rootClassName={styles['header-avatar']}
                                    url={ user.avatarLink.url }
                            />
                        </Link>

                        <Button
                            variant="secondary"
                            hiddenLabel
                            icon={<LogoutIcon />}
                            iconClassName={styles.logoutIcon}
                            rootClassName={styles.logout}
                            onClick={ handleLogout }
                        >
                            Logout
                        </Button>
                    </div>
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
