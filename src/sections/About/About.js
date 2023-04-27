import classNames from 'classnames';

import img from "./assets/Illustration.png"

import styles from "./About.module.css";
import {Container} from "../../components/Layout";

export const About = () => {
    return (
        <section id="about" className={styles['about-section']}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={classNames(styles.column, styles['column-first'])}>
                        <img className={styles.img} src={img} alt="man walking"/>
                    </div>
                    <div className={classNames(styles.column, styles['column-second'])}>
                        <h2 className={styles.title}>What is&nbsp;
                            <span className={styles.highlighted}>
                                CTF
                            </span>
                            ?
                        </h2>
                        <p className={styles.text}>
                            Capture The Flag is an exciting cybersecurity competition
                            where participants engage in solving various types of challenges.
                        </p>
                        <p className={styles.text}>
                            Typically, these challenges involve identifying vulnerabilities,
                            exploiting systems, or decrypting codes to capture hidden flags,
                            which are then converted into points. The winner is the team or
                            individual who gets the greatest points on completing the tasks.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
