import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div
      className="absolute left-10 right-0 top-10 flex
  items-center justify-center"
    >
      <div
        className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} 
        flex items-center rounded-full p-2 leading-none 
        text-indigo-100 lg:inline-flex`}
        role="alert"
      >
        <p
          className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} 
          mr-3 flex rounded-full px-2 py-1 text-xs font-semibold uppercase`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
