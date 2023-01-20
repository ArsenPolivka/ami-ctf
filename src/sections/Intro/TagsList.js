import { Tag } from '../../components/Tag';

import './TagsList.css';

export const TagsList = ({ rootClassName }) => {
  return (
    <ul className={`tags-list ${rootClassName}`}>
      <li className="tags-item">
        <Tag>#IT</Tag>
      </li>

      <li className="tags-item">
        <Tag>#Students</Tag>
      </li>

      <li className="tags-item">
        <Tag>#Ami</Tag>
      </li>
    </ul>
  );
};
