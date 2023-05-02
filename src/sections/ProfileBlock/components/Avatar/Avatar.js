import avatar from "../../assets/avatar-placeholder.png";

import styles from "./Avatar.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/auth/context";
import {addAvatar, getAvatarSASLink} from "../../../../api/user";

export const Avatar = ({ isChangeInfoVisible }) => {
  const [imageFile, setImageFile] = useState(null);
  const { user } = useContext(AuthContext);


  const handleImageUpload = (event) => {
    const fileBlob = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {


      getAvatarSASLink({ type: fileBlob.type }, user.id).then(response => {
        if (response.ok) {
          response.json().then(({type, fileAccessLink}) => {
            addAvatar(fileAccessLink.url, type, fileBlob).then(response => {
              if (response.ok) {
                setImageFile(fileBlob);
              } else {
                console.log("false");
              }
            })
          })
        } else {
          console.log("false");
        }
      })
    }
    fileReader.readAsBinaryString(fileBlob);
  };

  return (
    <div className={styles['avatar']}>
      <div className={styles['avatar-wrapper']}>
        <div className={styles.uploaded}>
          {imageFile ? (
              <img src={ URL.createObjectURL(imageFile) }
                   className={styles.image} alt="uploaded"
              />
          ) : (
              <img
                  className={styles['profile-image']}
                  src={avatar}
                  alt="user-avatar"
              />
          )}
        </div>

        {/*UPLOAD PHOTO BUTTON*/}
        { isChangeInfoVisible ? (
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
        ) : null }
      </div>
    </div>
  )
}
