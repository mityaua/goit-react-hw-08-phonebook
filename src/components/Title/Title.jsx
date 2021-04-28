import React, { createRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Title.module.scss';

const Title = ({ children }) => {
  const itemRef = createRef(null);

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={styles}
      nodeRef={itemRef}
    >
      <h1 className={styles.title} ref={itemRef}>
        {children}
      </h1>
    </CSSTransition>
  );
};

export default Title;
