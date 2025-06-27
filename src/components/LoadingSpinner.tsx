import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 space-y-4">
      {/* Main loading gear */}
      <div className="relative">
        <div className="loading-gear animate-gear-rotate"></div>
        <div className="absolute inset-0 loading-gear animate-gear-rotate" style={{ animationDirection: 'reverse', opacity: 0.3 }}></div>
      </div>
      
      {/* Status text */}
      <div className="text-center space-y-2">
        <p className="text-warning-yellow font-fallout-pixel text-sm terminal-text animate-flicker">
          PROCESSING CODE DATA...
        </p>
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-screen-green rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-screen-green rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-screen-green rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <p className="text-copper-green font-fallout-mono text-xs">
          AI CORE STATUS: ACTIVE
        </p>
      </div>
    </div>
  );
};