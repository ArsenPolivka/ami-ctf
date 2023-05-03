import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../../../../context/auth/context";
import { Button } from "../../../../components/Button";
import { LogoutButton } from "../LogoutButton";
import { ProfileButton } from "../ProfileButton/ProfileButton";

import styles from "./MainButtons.module.css";

export const MainButtons = ({ hasProfile, hasLogin, hasRegistration, hasLogout, hasGoToQuiz }) => {
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
                        <ProfileButton url={user.avatarLink?.url} />

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
