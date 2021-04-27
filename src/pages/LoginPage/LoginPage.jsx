import { useState } from 'react';

import styles from './LoginPage.module.scss';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
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

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
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
  );
};

export default LoginPage;