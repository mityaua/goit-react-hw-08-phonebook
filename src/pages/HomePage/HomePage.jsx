import { useHistory } from 'react-router-dom';

import Title from '../../components/Title';
import { ReactComponent as HoleImage } from '../../assets/images/hole.svg';

import routes from '../../routes';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const history = useHistory();

  const handleButton = () => {
    history.push(routes.contacts);
  };

  return (
    <main>
      <div className={styles.container}>
        <Title>Phonebook</Title>

        <div className={styles.thumb}>
          <HoleImage
            title="Try in now!"
            alt="Blackhole"
            className={styles.image}
          />
        </div>

        <p className={styles.text}>
          Fast, Secure and Mobile Friendly React App.
        </p>

        <button type="button" className={styles.button} onClick={handleButton}>
          Try in now!
        </button>
      </div>
    </main>
  );
};

export default HomePage;
