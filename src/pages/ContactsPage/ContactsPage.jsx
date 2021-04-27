import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Alert from '@material-ui/lab/Alert';

import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import Loader from '../../components/Loader';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactsPage = () => {
  const isLoadingContacts = useSelector(state =>
    contactsSelectors.getLoading(state),
  );
  const isError = useSelector(state => contactsSelectors.getError(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />

      <Filter />

      <ContactList />

      {isLoadingContacts && <Loader />}

      {isError && <Alert severity="error">{isError}</Alert>}
    </>
  );
};

export default ContactsPage;
