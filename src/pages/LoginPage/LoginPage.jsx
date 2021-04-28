import { connect } from 'react-redux';
import { useState } from 'react';

import { authOperations } from '../../redux/auth/';

import Title from '../../components/Title';

import styles from './LoginPage.module.scss';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = ({ onLogin }) => {
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
    <div>
      <Title>Log in to Phonebook</Title>

      <form className={styles.form} onSubmit={hanldeSubmit}>
        <label className={styles.label}>
          <span className={styles.label__text}>Email</span>
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
          <span className={styles.label__text}>Password</span>
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

        <div className={styles.button__wrapper}>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
