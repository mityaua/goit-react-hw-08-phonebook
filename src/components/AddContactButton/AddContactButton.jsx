import { useSelector } from 'react-redux';

import { contactsSelectors } from '../../redux/contacts';

import styles from './AddContactButton.module.scss';

const AddContactButton = () => {
  const isLoading = useSelector(state => contactsSelectors.getLoading(state));

  return (
    <div className={styles.button__wrapper}>
      <button type="submit" className={styles.button} disabled={isLoading}>
        Add contact
      </button>
    </div>
  );
};

export default AddContactButton;
