import Template from 'react-loader-spinner';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Template type="Rings" color="#2196f3" height={100} width={100} />
    </div>
  );
};

export default Loader;
