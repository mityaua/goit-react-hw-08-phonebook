import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
