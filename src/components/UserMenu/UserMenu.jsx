// import styles from './UserMenu.module.scss';

const UserMenu = ({ email, onLogOut }) => (
  <div>
    <span>Welcome, {email}</span>
    <button type="button" onClick={onLogOut}>
      Log Out
    </button>
  </div>
);

export default UserMenu;
