import { useContext } from "react";
import { Link, useNavigate, useMatch } from "react-router-dom";
import classNames from "classnames";

import { AuthContext } from "../../../../context/auth/context";

import { ReactComponent as LogoutIcon } from './assets/logout.svg';
import { Button } from "../../../../components/Button";
import { logoutUser } from "../../../../api/user";

import styles from "./MainButtons.module.css";

export const MainButtons = ({ hasProfile, hasLogin, hasRegistration }) => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const matchTasks = useMatch('/tasks');

    const handleLogout = async () => {
        await logoutUser();
        setUser(null);

        navigate("/login");
    };

    return (
        <>
            {(user && !matchTasks) ? (
                <Button
                    to="/tasks"
                    variant="primary"
                    rootClassName={styles['quiz-button']}
                >
                    Go to quiz
                </Button>
            ) : null}

            {hasProfile ? (
                <>
                    <Link
                        to="/profile"
                        className={classNames(styles['first-button'], styles.profileLink)}
                    >
                        { user.username }
                        <span className={styles.userIcon}></span>
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
