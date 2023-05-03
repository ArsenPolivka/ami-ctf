import avatar from "../../../ProfileBlock/assets/avatar-placeholder.png";

export const HeaderAvatar = ({ url, rootClassName }) => {
	return (
			<img src={ `${url ? url : avatar}` }
			     className={rootClassName}
			     alt="uploaded"
			/>
	)
}
