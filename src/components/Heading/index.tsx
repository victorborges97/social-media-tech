import React from 'react';

interface Props {
  title?: string;
  subtitle?: string;
}

const Heading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col'>
      {title && (
        <p className='text-4xl font-semibold text-gray-800 dark:text-white'>
          {title}
        </p>
      )}
      {subtitle && <p className='text-base text-gray-400'>{subtitle}</p>}
    </div>
  );
};

export default Heading;
