import axios from 'axios';
import { toast } from 'react-toastify';

import actions from './contacts-actions'; // Импорт экшенов из контактов в операции

axios.defaults.baseURL = 'http://localhost:2121';

// Асинхронная операция получения списка контактов (делает запрос, диспатчит экшн получения)
const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
    toast.error(error.message);
  }
};

// Асинхронная операция по добавлению контакта (принимает данные с формы, делает запрос, диспатчит экшн добавления)
const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
    toast.error(error.message);
  }
};

// Асинхронная операция удаления контакта (принимает id, делает запрос, диспатчит экшн удаления)
const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
    toast.error(error.message);
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };
