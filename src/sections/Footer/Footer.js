import { Container } from '../../components/Layout';
import { LogoExtended } from '../../components/Logo';

import { ReactComponent as Telegram } from './assets/telegram.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';

import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles['footer-section']}>
            <Container>
                <div className={styles['footer-wrapper']}>
                    <div className={styles['copyright']}>
                        <span className={styles['year']}>2023</span>
                        <span className={styles['copyright-symbol']}>&copy;</span>
                        <span className={styles['rights']}>All rights reserved</span>
                    </div>
                    <div className={styles['logo-wrapper']}>
                        <LogoExtended className={styles['logo-desktop']} theme="white" size="desktop" />
                        <LogoExtended className={styles['logo-mobile']} theme="white" size="mobile" />
                    </div>
                    <div className={styles['social']}>
                        <Telegram className={styles['telegram']} />
                        <Instagram className={styles['instagram']} />
                    </div>
                </div>
            </Container>
        </footer>
    );
};
