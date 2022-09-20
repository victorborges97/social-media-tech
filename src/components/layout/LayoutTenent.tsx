import React from 'react';

interface Props {
  children: React.ReactNode;
}

const LayoutTenent: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default LayoutTenent;
