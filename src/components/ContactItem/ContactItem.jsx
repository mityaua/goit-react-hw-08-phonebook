import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';

import styles from './ContactItem.module.scss';

// Компонент одного контакта
const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}</span>
      <a href={`tel:${contact.number}`} className={styles.number}>
        {contact.number}
      </a>

      <IconButton onClick={onDeleteContact} aria-label="Delete contact">
        <DeleteIcon width="20px" height="20px" fill="#a7a1a1" />
      </IconButton>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
