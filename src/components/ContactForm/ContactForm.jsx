import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import AddContactButton from '../AddContactButton';

import styles from './ContactForm.module.scss';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ contacts, onSubmit }) => {
  const [state, setState] = useState(initialState);
  const { name, number } = state;

  // Следит за инпутом
  const hanldeChange = event => {
    const { name, value } = event.currentTarget;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Метод на отправке формы. Формирует из стейта контакт и передает во внешний метод
  const hanldeSubmit = event => {
    event.preventDefault();

    const normalizedName = name.toLowerCase();

    // Проверка на дубликат по имени
    const nameInContacts = contacts.find(
      contact => contact.name === normalizedName,
    );

    // Проверка на дубликат по номеру
    const numberInContacts = contacts.find(
      contact => contact.number === number,
    );

    // Отправка имени и номера после проверки (в проп-метод из контейнера)
    if (!nameInContacts && !numberInContacts) {
      onSubmit(normalizedName, number);
      resetForm();
      return;
    }

    toast.info(`${name} is already in contacts`);
  };

  // Сброс полей формы (после отправки)
  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={hanldeSubmit}>
      <label className={styles.label}>
        <span className={styles.label__text}>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="Input for your name"
          className={styles.input}
          value={name} // Пишет значение в локальный стейт
          onChange={hanldeChange} // Наблюдающий метод
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.label__text}>Number</span>
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          aria-label="Input for your phone number"
          className={styles.input}
          value={number} // Пишет значение в локальный стейт
          onChange={hanldeChange} // Наблюдающий метод
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>

      <AddContactButton />
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
