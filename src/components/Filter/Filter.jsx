import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

// Принимает значение с поля фильтра и метод пишущий в стейт
const Filter = ({ value, onChange }) => (
  <div className={styles.filter}>
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
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
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
  onChange: PropTypes.func.isRequired,
};

export default Filter;
