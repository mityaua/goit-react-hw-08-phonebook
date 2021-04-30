import { connect } from 'react-redux'; // Импортирует коннект для глобального хранилища

import { contactsOperations, contactsSelectors } from '../../redux/contacts'; // Импорт async операции удаления контакта и селектора всех контактов

import ContactsList from './ContactsList'; // Импорт компонента списка контактов для обёртки в коннекте

// Из стейта в пропы компонента ContactsList - после фильтрации в селекторах
const mapStateToProps = state => ({
  contacts: contactsSelectors.getfilteredContacts(state),
});

// Из стейта в пропы компонента ContactsList - метод удаления контакта
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
