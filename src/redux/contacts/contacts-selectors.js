import { createSelector } from '@reduxjs/toolkit'; // Импорт функции для мемоизации селектора

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;
const getError = state => state.contacts.error;

// Мемоизация функции фильтра контактов на базе композитного селектора
const getfilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// Композитный селектор для фильтра контактов (вариант без мемоизации)
// export const getfilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// eslint-disable-next-line
export default {
  getContacts,
  getFilter,
  getLoading,
  getError,
  getfilteredContacts,
};
