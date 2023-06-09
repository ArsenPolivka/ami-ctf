import { PageNavigation } from "../PageNavigation";
import { LogoExtended } from "../../../../components/Logo";
import { MainButtons } from "../MainButtons/MainButtons";
import { Burger } from "../Burger";
import { LogoutButton } from "../LogoutButton";
import { ProfileButton } from "../ProfileButton/ProfileButton";
import { Button } from "../../../../components/Button";

import styles from './MobileHeader.module.css'

export const MobileHeader = ({
    onLinkTapClose,
    headerClass,
    toggleHeader,
    isBurgerActive,
    pageNavigation,
    hasProfile,
    hasLogin,
    hasRegistration,
    hasLogout,
    hasProfileTasks,
    hasGoToQuiz
}) => {
    return (
        <div className={styles['mobile-header']}>
            <div className={styles.wrapper}>
                <div className={styles['hidden-logo']}>
                    <LogoExtended size="desktop" />
                </div>

                {pageNavigation ? (
                    <Burger
                        isBurgerActive={isBurgerActive}
                        toggleHeader={toggleHeader}
                    />
                ) : null}

                <div className={styles['hidden-buttons']}>
                    <MainButtons
                        hasProfile={hasProfile}
                        hasLogin={hasLogin}
                        hasRegistration={hasRegistration}
                    />
                </div>

                <div className={styles.logo}>
                    <LogoExtended size="mobile" />
                </div>

                {hasGoToQuiz ? (
                    <div className={styles['quiz']}>
                        <Button
                            to="/tasks"
                            variant="primary"
                            rootClassName={styles['quiz-button']}
                        >
                            Go to quiz
                        </Button>
                    </div>
                ) : null}

                {hasProfileTasks ? (
                    <div className={styles.onlyMobile}>
                        <ProfileButton />
                    </div>
                ) : null}

                {hasLogout ? (
                    <div className={styles.onlyMobile}>
                        <LogoutButton />
                    </div>
                ) : null}
            </div>
            <div className={styles[headerClass]}>
                <nav className={styles.navigation}>
                    {pageNavigation ? (
                        <PageNavigation
                            navList={pageNavigation}
                            rootClassName={styles.nav}
                            onClose={ onLinkTapClose }
                        />
                    ) : null}

                    <div className={styles.buttons}>
                        <MainButtons
                            hasProfile={hasProfile}
                            hasLogin={hasLogin}
                            hasRegistration={hasRegistration}
                        />
                    </div>
                </nav>
                <div
                    className={styles.backing}
                    onClick={toggleHeader}
                />
            </div>
        </div>
    );
};
