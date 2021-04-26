import { connect } from 'react-redux'; // Импортирует коннект для глобального хранилища

import { contactsOperations, contactsSelectors } from '../../redux/contacts'; // Импорт async операции удаления контакта и селектора всех контактов

import ContactList from './ContactList'; // Импорт компонента списка контактов для обёртки в коннекте

// Из стейта в пропы компонента ContactList - после фильтрации в селекторах
const mapStateToProps = state => ({
  contacts: contactsSelectors.getfilteredContacts(state),
});

// Из стейта в пропы компонента ContactList - метод удаления контакта
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
