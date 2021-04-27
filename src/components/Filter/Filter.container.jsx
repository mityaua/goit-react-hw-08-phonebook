import { connect } from 'react-redux';

import { contactsSelectors, contactsActions } from '../../redux/contacts';

import Filter from './Filter';

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = distatch => ({
  onChange: event =>
    distatch(contactsActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
