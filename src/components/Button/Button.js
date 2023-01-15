import { Link } from 'react-router-dom';

import './Button.css';

export const Button = ({ to, children, type }) => {
  if (to) {
    return (
      <Link to={to} className={`button button--${type}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`button button--${type}`}>
      {children}
    </button>
  );
};
