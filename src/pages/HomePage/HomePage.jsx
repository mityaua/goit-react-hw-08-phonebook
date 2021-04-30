import { NavLink } from 'react-router-dom';

import Title from '../../components/Title';
import { ReactComponent as HoleImage } from '../../assets/images/hole.svg';

import routes from '../../routes';

import styles from './HomePage.module.scss';

// Компонент главной страницы приложения
const HomePage = () => (
  <main>
    <section className={styles.container}>
      <Title>Phonebook</Title>

      <div className={styles.thumb}>
        <HoleImage
          title="Try it now!"
          alt="Blackhole"
          className={styles.image}
        />
      </div>

      <p className={styles.text}>
        Fast, Secure and Mobile Friendly React Application
      </p>

      <NavLink
        to={routes.contacts}
        className={styles.button}
        title="Try it now!"
        aria-label="Go to contacts"
      >
        Try it now!
      </NavLink>
    </section>
  </main>
);

export default HomePage;
