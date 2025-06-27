import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mt-4 p-4 bg-fallout-charcoal border-2 border-red-600 rounded shadow-terminal" role="alert">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-4 h-4 bg-red-500 rounded-full animate-flicker"></div>
        <span className="text-red-400 font-fallout-pixel text-xs terminal-text">
          SYSTEM ERROR DETECTED
        </span>
      </div>
      
      <div className="bg-red-900 bg-opacity-30 p-3 rounded border border-red-600">
        <div className="text-red-300 font-fallout-mono text-sm">
          <span className="text-red-400 font-bold">ERROR: </span>
          {message}
        </div>
      </div>
      
      <div className="mt-2 text-center">
        <p className="text-fallout-tan text-xs font-fallout-mono opacity-70">
          Contact your local Vault-Tec representative for assistance
        </p>
      </div>
    </div>
  );
};