import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './friendList.module.css';

export function FriendList({ friends }) {
  return (
    <>
      <ul className={css.friend_list}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <FriendListItem friends={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};