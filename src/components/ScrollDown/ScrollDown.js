import styles from "./ScrollDown.module.css";

export const ScrollDown = () => {
    return (
        <div className={styles['middle']}>
            <div className={styles.mouse}></div>
            <div className={styles.label}>
                Scroll down
            </div>
        </div>
    )
}
