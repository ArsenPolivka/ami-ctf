import { Link } from 'react-router-dom';

import './Button.css';

export const Button = ({ to, children, variant, type='button', rootClassName, onClick }) => {
  if (to) {
    return (
      <Link to={to} className={`button button--${variant} ${rootClassName}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`button button--${variant} ${rootClassName}`} onClick={onClick}>
      {children}
    </button>
  );
};
