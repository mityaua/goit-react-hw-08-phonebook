import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth/';

import styles from './LoginForm.module.scss';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = ({ onLogin }) => {
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const hanldeChange = event => {
    const { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = event => {
    event.preventDefault();

    onLogin(state);

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={hanldeSubmit}>
      <label className={styles.label}>
        <span className={styles.text}>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Your e-mail"
          aria-label="Input for your email"
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.text}>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Your password"
          aria-label="Input for your password"
          required
        />
      </label>

      <div className={styles.container}>
        <button type="submit" className={styles.button}>
          Log in
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginForm);
