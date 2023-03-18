import avatar from "../../assets/avatar-placeholder.png";

import styles from "./Avatar.module.css";

export const Avatar = ({ isChangeInfoVisible }) => {
    return (
        <div className={styles['avatar']}>
            <div className={styles['avatar-wrapper']}>
                <img
                    className={styles['profile-image']}
                    src={avatar}
                    alt="user-avatar"
                />

                {/*UPLOAD PHOTO BUTTON*/}
                {/*{ isChangeInfoVisible ? (*/}
                {/*    <button className={styles['upload-button']}>*/}
                {/*        Upload photo*/}
                {/*    </button>*/}
                {/*) : null }*/}
            </div>
        </div>
    )
}
