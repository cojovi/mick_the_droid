import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full py-4 px-6 bg-gradient-to-r from-primary-500 to-accent-500 
                 rounded-lg text-white font-semibold text-lg
                 hover:from-primary-600 hover:to-accent-600 
                 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed
                 transition-all duration-200 shadow-glow hover:shadow-glow-pink
                 flex items-center justify-center space-x-3"
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Analyzing Code...</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Start Analysis</span>
        </>
      )}
    </button>
  );
};