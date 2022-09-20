import React from 'react';

interface Props {
  children: React.ReactNode;
}

const LayoutPublic: React.FC<Props> = ({ children }) => {
  // Put Header or Footer Here
  return <>{children}</>;
};

export default LayoutPublic;
