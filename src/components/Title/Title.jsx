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
      <div className={styles.wrapper}>
        <h1 className={styles.title} ref={itemRef}>
          {children}
        </h1>
      </div>
    </CSSTransition>
  );
};

export default Title;
