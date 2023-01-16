import { Link } from 'react-router-dom';

import './Button.css';

export const Button = ({ to, children, type, rootClassName }) => {
  if (to) {
    return (
      <Link to={to} className={`button button--${type} ${rootClassName}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`button button--${type} ${rootClassName}`}>
      {children}
    </button>
  );
};
