import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.scss';

const UserMenu = ({ email, onLogOut }) => (
  <div className={styles.profile}>
    <img
      src={`https://eu.ui-avatars.com/api/?background=2196f3&color=fff&name=${email}`}
      alt="avatar"
      title="Your avatar"
      className={styles.avatar}
    />
    <span className={styles.welcome}>Welcome, {email}</span>
    <button type="button" onClick={onLogOut} className={styles.button}>
      Log Out
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
