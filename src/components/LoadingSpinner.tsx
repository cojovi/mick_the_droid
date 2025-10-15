import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-4">
      {/* Modern loading animation */}
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-gray-700"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-primary-400 border-t-transparent animate-spin"></div>
        <div className="absolute top-1 left-1 w-10 h-10 rounded-full border-2 border-accent-400 border-t-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      
      {/* Status text */}
      <div className="text-center space-y-2">
        <p className="text-primary-400 font-medium animate-pulse">
          AI Analysis in Progress
        </p>
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-gray-400 text-sm font-mono">
          Analyzing patterns and best practices...
        </p>
      </div>
    </div>
  );
};