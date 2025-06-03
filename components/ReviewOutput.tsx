
import React from 'react';

interface ReviewOutputProps {
  feedback: string;
  isLoading: boolean;
}

export const ReviewOutput: React.FC<ReviewOutputProps> = ({ feedback, isLoading }) => {
  if (isLoading) {
    // Placeholder or subtle loading state can be shown here if needed,
    // but the main spinner is in App.tsx.
    // For now, just don't show old feedback while loading new.
    return (
      <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-xl h-full flex items-center justify-center">
        <p className="text-gray-400 text-lg">Generating feedback...</p>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-xl h-full flex items-center justify-center">
        <p className="text-gray-400 text-lg">Review feedback will appear here.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-xl h-full overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4 text-primary-400 border-b border-gray-700 pb-2">
        AI Code Review Feedback
      </h3>
      <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{feedback}</pre>
    </div>
  );
};
