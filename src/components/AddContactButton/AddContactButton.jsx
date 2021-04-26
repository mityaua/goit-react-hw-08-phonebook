import styles from './AddContactButton.module.scss';

const AddContactButton = () => (
  <div className={styles.button__wrapper}>
    <button type="submit" className={styles.button}>
      Add contact
    </button>
  </div>
);

export default AddContactButton;
