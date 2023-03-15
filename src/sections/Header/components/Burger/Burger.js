import styles from "./Burger.module.css"

export const Burger = ({isBurgerActive, toggleHeader}) => {
    return (
        <button
            className={`${styles.burger} ${isBurgerActive ? styles["is-active"] : ""}`}
            onClick={toggleHeader}
        >
            <span />
            <span />
            <span />
            <span />
        </button>
    )
}
