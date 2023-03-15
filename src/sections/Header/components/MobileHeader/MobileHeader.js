import { PageNavigation } from "../PageNavigation";
import { LogoExtended } from "../../../../components/Logo";
import { MainButtons } from "../MainButtons/MainButtons";
import { Burger } from "../Burger";

import styles from './MobileHeader.module.css'

export const MobileHeader = ({ onLinkTapClose,
                                 headerClass,
                                 toggleHeader,
                                 isBurgerActive,
                                 pageNavigation,
                                 hasProfile,
                                 hasLogin,
                                 hasRegistration }) => {
    return (
        <div className={styles['mobile-header']}>
            <div className={styles.wrapper}>
                <div className={styles['hidden-logo']}>
                    <LogoExtended size="desktop" />
                </div>

                <Burger
                    isBurgerActive={isBurgerActive}
                    toggleHeader={toggleHeader}
                />

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
            </div>
            <div className={styles[headerClass]}>
                <nav className={styles.navigation}>
                    <PageNavigation
                        navList={pageNavigation}
                        rootClassName={styles.nav}
                        onClose={ onLinkTapClose }
                    />

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
                ></div>
            </div>
        </div>
    );
};
