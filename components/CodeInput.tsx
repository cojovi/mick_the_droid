
import React from 'react';

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const CodeInput: React.FC<CodeInputProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste your code here..."
      className="w-full h-72 p-3 font-mono text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
      spellCheck="false"
    />
  );
};
