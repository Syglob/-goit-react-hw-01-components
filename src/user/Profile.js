import PropTypes from 'prop-types';
import styles from './profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        width="300px"
        src={avatar}
        alt="User avatar"
        className={styles.avatar}
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    vievs: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Profile;
