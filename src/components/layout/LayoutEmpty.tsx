import React from 'react';

interface Props {
  children: React.ReactNode;
}

const LayoutEmpty: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default LayoutEmpty;
