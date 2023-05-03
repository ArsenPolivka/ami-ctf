import { useEffect, useMemo, useState } from "react";

import { Container } from '../../components/Layout'

import { PageNavigation } from './components/PageNavigation';
import { LogoExtended } from '../../components/Logo';
import { MainButtons } from "./components/MainButtons/MainButtons";
import { MobileHeader } from "./components/MobileHeader";

import styles from './Header.module.css';

export const Header = ({ pageNavigation, hasProfile, hasLogin, hasRegistration, hasLogout }) => {
    const [isHeaderVisible, setHeaderVisible] = useState(false);
    const [isBurgerActive, setBurgerActive] = useState(false);

    useEffect(() => {
        if (!isHeaderVisible) {
            setBurgerActive(false);
        }
    }, [isHeaderVisible]);

    const onLinkTapClose = () => {
        setHeaderVisible(false);
        document.body.style.overflow = "";
    }

    const toggleHeader = () => {
        setHeaderVisible(!isHeaderVisible);
        setBurgerActive(!isBurgerActive);

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
    <header className={styles.header}>
      <Container>
          <div className={styles['mobile-wrapper']}>
              <MobileHeader
                  pageNavigation={pageNavigation}
                  hasProfile={hasProfile}
                  hasLogin={hasLogin}
                  hasRegistration={hasRegistration}
                  hasLogout={hasLogout}
                  onLinkTapClose={onLinkTapClose}
                  headerClass={headerClass}
                  toggleHeader={toggleHeader}
                  isBurgerActive={isBurgerActive}
              />
          </div>
          <div className={styles['desktop-wrapper']}>
          <LogoExtended />

          <nav className={styles.nav}>
            {pageNavigation ? (
              <PageNavigation
                  navList={pageNavigation}
                  rootClassName={styles.navigation}
              />
            ) : null}

            <div className={styles['main-buttons']}>
                <MainButtons
                    hasProfile={hasProfile}
                    hasLogin={hasLogin}
                    hasRegistration={hasRegistration}
                />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};
