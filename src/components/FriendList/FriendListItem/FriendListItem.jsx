import PropTypes from 'prop-types';
import css from './friendListItem.module.css'

export function FriendListItem({ friends: { name, avatar, isOnline } }) {
	return (
    <>
      <span
        className={isOnline ? `${css.status} ${css.isOnline}` : css.status}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.shape({
			name: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};