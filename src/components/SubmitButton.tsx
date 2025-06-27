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
      className="w-full btn-fallout p-4 rounded-lg 
                 text-warning-yellow font-fallout-heading font-bold text-lg
                 shadow-metal hover:shadow-glow-yellow
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-metal
                 transition-all duration-150 terminal-text
                 flex items-center justify-center space-x-3"
    >
      {isLoading ? (
        <>
          <div className="loading-gear animate-gear-rotate"></div>
          <span className="font-fallout-pixel text-sm">ANALYZING...</span>
        </>
      ) : (
        <>
          <div className="w-4 h-4 bg-warning-yellow rounded-full animate-terminal-blink"></div>
          <span>INITIATE CODE ANALYSIS</span>
          <div className="w-4 h-4 bg-warning-yellow rounded-full animate-terminal-blink"></div>
        </>
      )}
    </button>
  );
};