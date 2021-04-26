import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу

import { contactsOperations, contactsSelectors } from '../../redux/contacts'; // Импорт операции добавления контакта и селектора всех контактов

import ContactForm from './ContactForm'; // Импорт компонента формы для обёртки в коннекте

// Из глобального стейта в пропы компонента ContactForm
const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

// Из глобального стейта в пропы компонента ContactForm - методы
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
