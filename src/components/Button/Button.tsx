import React, { memo, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;

  solid?: boolean;
  outline?: boolean;
  action?: boolean;

  onClick?(): void;
};

function Button(props: ButtonProps) {
  const { children, solid, outline, action, onClick } = props;

  let btnClassName: string = styles.btn;

  if (solid) btnClassName += ' ' + styles['btn--solid'];
  if (outline) btnClassName += ' ' + styles['btn--outline'];
  if (action) btnClassName += ' ' + styles['btn--action'];

  return (
    <button className={btnClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(Button);
