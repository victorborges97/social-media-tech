import React from 'react';
import { FieldError } from 'react-hook-form';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError | undefined;
  innerRef?: any;
}

const MyInput: React.FC<Props> = ({ error = undefined, innerRef, ...rest }) => {
  return (
    <>
      <input
        className={`
        mb-3 block w-full appearance-none rounded border 
        ${error && 'border-red-500'}
        bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white 
        focus:outline-none dark:bg-gray-200`}
        ref={innerRef}
        {...rest}
      />
      {error && (
        <p className='text-xs italic text-red-500'>{error['message'] ?? ''}</p>
      )}
    </>
  );
};

const Input = React.forwardRef<unknown, Props>((props, ref) => (
  <MyInput innerRef={ref} {...props} />
));

export default Input;
