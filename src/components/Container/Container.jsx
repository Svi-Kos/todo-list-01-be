import React from 'react';
import s from './Container.module.css';

function Container({ children }) {
  return (
    <div className={s.Container}>
      <div className={s.box}>{children}</div>
    </div>
  );
}
export default Container;
