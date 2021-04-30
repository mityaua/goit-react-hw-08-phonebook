import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

// Компонент фильтра контактов
const Filter = ({ value, isLoading, onChange }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Contacts</h2>

    <label className={styles.label}>
      <span className={styles.label__text}>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        placeholder="Find"
        className={styles.input}
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Find contacts by name"
        disabled={isLoading}
        required
      />
    </label>
  </div>
);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
