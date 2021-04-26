import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className={styles.IconButton}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
