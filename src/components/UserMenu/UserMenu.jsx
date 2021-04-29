import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.scss';

const UserMenu = ({ email, onLogOut }) => (
  <div className={styles.profile}>
    <div className={styles.thumb}>
      <img
        src={`https://eu.ui-avatars.com/api/?background=2196f3&color=fff&&length=1&name=${email}`}
        alt="avatar"
        title="Your avatar"
        className={styles.avatar}
      />
    </div>

    <span className={styles.welcome}>
      Welcome, <span className={styles.email}>{email}</span>
    </span>

    <button
      type="button"
      title="Log out"
      aria-label="Log out"
      onClick={onLogOut}
      className={styles.button}
    >
      Log out
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
