import './Tag.css';

export const Tag = ({ children, rootClassName }) => {
  return (
    <div className={`tag ${rootClassName}`}>
      {children}
    </div>
  );
};
