import { useState } from 'react';

import styles from './RegisterPage.module.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const hanldeChange = event => {
    const { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = event => {
    event.preventDefault();

    console.log(name, email, password);

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={hanldeSubmit}>
      <label className={styles.label}>
        <span className={styles.label__text}>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          aria-label="Input for your name"
          className={styles.input}
          value={name}
          onChange={hanldeChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.label__text}>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Your e-mail"
          aria-label="Input for your Email"
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
          placeholder="Your strong password"
          aria-label="Input for your password"
          required
        />
      </label>

      <div className={styles.button__wrapper}>
        <button type="submit" className={styles.button}>
          Create account
        </button>
      </div>
    </form>
  );
};

export default RegisterPage;
