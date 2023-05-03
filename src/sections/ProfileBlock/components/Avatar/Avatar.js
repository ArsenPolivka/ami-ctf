import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../../context/auth/context";
import { addAvatar, getAvatarSASLink } from "../../../../api/user";

import avatar from "../../assets/avatar-placeholder.png";

import styles from "./Avatar.module.css";
import {Loader} from "../../../../components/Loader";

export const Avatar = () => {
  const [imageFile, setImageFile] = useState(null);
  const [avatarLink, setAvatarLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(AuthContext);

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

  useEffect(() => {
    if (imageFile) {
      setAvatarLink(URL.createObjectURL(imageFile));
      setIsLoading(false);
    }
  }, [imageFile]);

  return (
    <div className={styles['avatar']}>
      <div className={styles['avatar-wrapper']}>
        <div className={styles['profile-image-wrapper']}>
            <img src={ avatarLink ? avatarLink : user.avatarLink.url ?? avatar }
                 className={styles['profile-image']}
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
