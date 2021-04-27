import { useHistory } from 'react-router-dom';
import routes from '../../routes';

import { ReactComponent as SpaceImage } from '../../assets/images/404.svg';

import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push(routes.home);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Houston, we’ve had an ERROR</h1>

      <SpaceImage
        width="320px"
        height="320px"
        title="Error 404"
        alt="Error 404"
        className={styles.image}
      />

      <p className={styles.text}>
        The page you’re looking for was removed, renamed, or got lost in space.
      </p>

      <button type="button" className={styles.button} onClick={handleGoBack}>
        Return to Home
      </button>
    </div>
  );
};

export default PageNotFound;
