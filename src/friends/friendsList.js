import PropTypes from 'prop-types';
import styles from './friends.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={styles.statusOff}></span>
          ) : (
            <span className={styles.status}></span>
          )}

          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};
