import classNames from 'classnames';

import img from "./assets/Illustration.png"

import styles from "./About.module.css";

export const About = () => {
    return (
        <section id="about" className={styles['about-section']}>
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
                    Lorem ipsum dolor sit amet consectetur.
                    Sed non ut dui morbi feugiat quis elit.
                    Lorem proin phasellus consectetur mi fermentum congue.
                    Arcu molestie fermentum interdum massa nunc ut interdum viverra et.
                    Platea vitae purus nulla euismod.
                </p>
                <p className={styles.text}>
                    Vestibulum erat in adipiscing suscipit mauris elit malesuada.
                    Viverra mattis egestas dignissim habitasse faucibus semper eget.
                    Imperdiet eget id fames interdum.
                    In dictumst sit ultrices a non et.
                    Lacus porttitor orci tristique.
                </p>
            </div>
        </section>
    );
}
