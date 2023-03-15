import { useState, useMemo } from "react";

import { PageNavigation } from "../PageNavigation";
import { LogoExtended } from "../../../components/Logo";
import { Button } from "../../../components/Button";

import styles from './MobileHeader.module.css'

export const MobileHeader = ({pageNavigation, hasProfile, hasLogin, hasRegistration}) => {
    const [isHeaderVisible, setHeaderVisible] = useState(false);

    const onLinkTapClose = () => {
        setHeaderVisible(false);
        document.body.style.overflow = "";
    }

    const toggleHeader = () => {
        setHeaderVisible(!isHeaderVisible);

        if (!isHeaderVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    };

    const headerClass = useMemo(() => {
        if (isHeaderVisible) {
            return "dropdown-header visible";
        }

        return "dropdown-header";
    }, [isHeaderVisible]);

    return (
        <div className={styles['mobile-header']}>
            <div className={styles.wrapper}>
                <button
                    className={styles.burger}
                    onClick={toggleHeader}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <div className={styles.logo}>
                    <LogoExtended size="mobile" />
                </div>
            </div>
            <div className={styles[headerClass]}>
                <nav className={styles.navigation}>
                    <PageNavigation
                        navList={pageNavigation}
                        rootClassName={styles.nav}
                        onClose={ onLinkTapClose }
                    />
                    <div className={styles.buttons}>
                        {hasProfile ? (
                            <Button
                                to="/profile"
                                variant="secondary"
                                rootClassName={styles['first-button']}
                            >
                                Profile
                            </Button>
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
                    </div>
                </nav>
                <div
                    className={styles.backing}
                    onClick={toggleHeader}
                ></div>
            </div>
        </div>
    );
};
