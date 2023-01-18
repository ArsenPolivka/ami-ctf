import { Link } from 'react-router-dom';

import './PageNavigation.css';

export const PageNavigation = ({ navList, rootClassName }) => {
  return (
    <ul className={`page-navigation ${rootClassName}`}>
      {navList.map(({ to, label, id }) => {
        return (
          <li className="list-item" key={id}>
            <Link className="link" to={to}>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
