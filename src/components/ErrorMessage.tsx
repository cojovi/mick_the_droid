import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg" role="alert">
      <div className="flex items-center space-x-3">
        <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <h3 className="text-red-400 font-medium">Analysis Error</h3>
          <p className="text-red-300 text-sm mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
};