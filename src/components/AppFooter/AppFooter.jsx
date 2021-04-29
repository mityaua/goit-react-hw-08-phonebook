import styles from './AppFooter.module.scss';

const AppFooter = () => {
  return (
    <footer>
      <small className={styles.text}>
        &copy; {new Date().getFullYear()} Developed with{' '}
        <span role="img" aria-label="heart" className={styles.heart}>
          ❤
        </span>
        by
        <a
          href="https://github.com/mityaua"
          target="_blank"
          rel="noopener noreferrer"
          title="Github profile"
          aria-label="Link to Github profile"
          className={styles.link}
        >
          <span className={styles.name}>Mitya</span>
        </a>
      </small>
    </footer>
  );
};

export default AppFooter;
