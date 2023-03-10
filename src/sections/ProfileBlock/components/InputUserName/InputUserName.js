import { Input } from "../../../../components/Input";

import styles from "../../ProfileBlock.module.css";

export const InputUserName = ({ isChangeInfoVisible }) => {
    return (
        <>
            {!isChangeInfoVisible ? (
                <div className={styles['item-content']}>
                    ralph_edwards19
                </div>
            ) : (
                <div className={styles['item-wrapper']}>
                    <Input
                        rootClassName={styles['item-content']}
                        placeholder="New username"
                    />
                </div>
            )}
        </>
    )
}
