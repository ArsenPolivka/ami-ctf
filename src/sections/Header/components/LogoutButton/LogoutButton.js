import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../context/auth/context";
import { logoutUser } from "../../../../api/user";
import { Button } from "../../../../components/Button";
import { ReactComponent as LogoutIcon } from './assets/logout.svg';

import styles from './LogoutButton.module.css';

export const LogoutButton = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logoutUser();
    setUser(null);

    navigate("/login");
  };

  return (
    <Button
      variant="secondary"
      hiddenLabel
      icon={<LogoutIcon />}
      iconClassName={styles.logoutIcon}
      rootClassName={styles.logout}
      onClick={ handleLogout }
    >
      Logout
    </Button>
  );
}
