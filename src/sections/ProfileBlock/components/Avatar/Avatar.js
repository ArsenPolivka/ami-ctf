import { useContext, useState } from "react";
import toast from "react-hot-toast";
import classNames from "classnames";

import { AuthContext } from "../../../../context/auth/context";
import { addAvatar, getAvatarSASLink, getCurrentUser } from "../../../../api/user";
import { Loader } from "../../../../components/Loader";

import avatar from "../../assets/avatar-placeholder.png";

import styles from "./Avatar.module.css";

export const Avatar = ({ rootClassName }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(AuthContext);

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  async function fetchUser() {
    const response = await getCurrentUser();

    if (response.id) {
      setUser(response);
    }
  }

  const handleImageUpload = (event) => {
    setIsLoading(true);

    const fileBlob = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      getAvatarSASLink({ type: fileBlob.type }, user.id).then(response => {
        if (response.ok) {
          response.json().then(({type, fileAccessLink}) => {
            addAvatar(fileAccessLink.url, type, fileBlob).then(response => {
              if (response.ok) {
                fetchUser();
                notifySuccess("Avatar successfully added!");
                setIsLoading(false);
              } else {
                notifyError(response.title);
              }
            })
          })
        } else {
          notifyError(response.title);
        }
      })
    }

    if (fileBlob instanceof Blob) {
      fileReader.readAsBinaryString(fileBlob);
    } else {
      setIsLoading(false);
    }
  };

  return (
      <div className={styles['avatar']}>
        <div className={styles['avatar-wrapper']}>
          <div className={styles['profile-image-wrapper']}>
            <img src={ `${user.avatarLink?.url ? user.avatarLink?.url : avatar}` }
                 className={classNames(styles['profile-image'], rootClassName)}
                 alt="uploaded"
            />
          </div>

          <label
              htmlFor="image-input"
              className={styles['upload-button']}
          >
            <input
                id="image-input"
                className={styles.input}
                type="file"
                accept="image/*"
                onChange={ handleImageUpload }
            />
            Upload photo
          </label>
        </div>
        { isLoading ? <Loader /> : null}
      </div>
  )
}
