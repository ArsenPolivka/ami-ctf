import { useState, useMemo } from "react";

import styles from './MobileHeader.module.css'
import {PageNavigation} from "../PageNavigation";

export const MobileHeader = ({pageNavigation}) => {
    const [isHeaderVisible, setHeaderVisible] = useState(false);

    const toggleHeader = () => setHeaderVisible(!isHeaderVisible);

    const headerClass = useMemo(() => {
        if (isHeaderVisible) {
            return "dropdown-header visible";
        }

        return "dropdown-header";
    }, [isHeaderVisible]);

    return (
        <div className={styles['mobile-header']}>
            <button className={styles.burger} onClick={toggleHeader}>
                <span />
                <span />
                <span />
            </button>

            <div className={styles[headerClass]}>
                <nav>
                    <PageNavigation
                        navList={pageNavigation}
                        rootClassName={styles.nav}
                    />
                </nav>
            </div>
        </div>
    );
};
