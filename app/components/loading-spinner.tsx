import React from 'react';

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};