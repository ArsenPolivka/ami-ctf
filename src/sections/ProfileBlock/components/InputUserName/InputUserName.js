import { useContext } from "react";

import { AuthContext } from "../../../../context/auth/context";
import { Input } from "../../../../components/Input";

import styles from "../../ProfileBlock.module.css";

export const InputUserName = ({ isChangeInfoVisible, value, onChange, error }) => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {!isChangeInfoVisible ? (
                <div className={styles['item-content']}>
                    {user.username}
                </div>
            ) : (
                <div className={styles['item-wrapper']}>
                    <Input
                        required
                        rootClassName={styles['item-content']}
                        placeholder="New username"
                        value={value}
                        onChange={onChange}
                        name="username"
                        error={error && error.username}
                    />
                </div>
            )}
        </>
    )
}
