import React from 'react';

interface ReviewOutputProps {
  feedback: string;
  isLoading: boolean;
}

export const ReviewOutput: React.FC<ReviewOutputProps> = ({ feedback, isLoading }) => {
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-gray-700"></div>
            <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-2 border-primary-400 border-t-transparent animate-spin"></div>
          </div>
          <div>
            <p className="text-lg font-medium text-primary-400 mb-2">
              Processing your code...
            </p>
            <p className="text-gray-400">
              This may take a few moments depending on code complexity
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Ready for Analysis
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Paste your code in the editor and select the programming language to get started with intelligent code review and suggestions.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Security Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span>Performance Review</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
              <span>Best Practices</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-primary-500/20">
          <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
            <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>Analysis Complete</span>
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs text-gray-400 font-mono">SUCCESS</span>
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <div className="p-4 bg-dark-900/50 rounded-lg border border-primary-500/20">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-200">
              {feedback}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};