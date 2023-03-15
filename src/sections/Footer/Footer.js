import { Container } from '../../components/Layout';
import { LogoExtended } from '../../components/Logo';

import { ReactComponent as Telegram } from './assets/telegram.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';

import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles['footer-section']}>
            <Container>
                    <div className={styles['mobile-variant']}>
                        <div className={styles['copyright-logo-wrapper']}>
                            <LogoExtended
                                className={styles['logo-mobile']}
                                theme="white"
                                size="mobile"
                            />
                            <div className={styles.copyright}>
                                <span>2023</span>
                                <span>&copy;</span>
                                <span>All rights reserved</span>
                            </div>
                        </div>
                        <div className={styles.social}>
                            <a
                                className={styles['telegram-wrapper']}
                                href="https://web.telegram.org/"
                            >
                                <Telegram className={styles.telegram} />
                            </a>
                            <a
                                className={styles['instagram-wrapper']}
                                href="https://www.instagram.com/"
                            >
                                <Instagram className={styles.instagram} />
                            </a>
                        </div>
                    </div>
                    <div className={styles['desktop-variant']}>
                        <div className={styles.copyright}>
                            <span>2023</span>
                            <span>&copy;</span>
                            <span>All rights reserved</span>
                        </div>
                        <LogoExtended
                            className={styles['logo-desktop']}
                            theme="white"
                            size="desktop"
                        />
                        <div className={styles.social}>
                            <a
                                className={styles['telegram-wrapper']}
                                href="https://t.me/darkside_ami"
                                target="_blank"
                            >
                                <Telegram className={styles.telegram}/>
                            </a>
                            <a
                                className={styles['instagram-wrapper']}
                                href="https://www.instagram.com/lnu.prykladna/"
                                target="_blank"
                            >
                                <Instagram className={styles.instagram}/>
                            </a>
                        </div>
                    </div>
            </Container>
        </footer>
    );
};
