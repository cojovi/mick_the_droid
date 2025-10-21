import React from 'react';

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const CodeInput: React.FC<CodeInputProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-300">
          Code Editor
        </label>
        <div className="text-xs text-gray-500 font-mono">
          {value.length.toLocaleString()} characters
        </div>
      </div>
      
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="// Paste your code here for analysis
// The AI will review your code for bugs, performance, security, and best practices

function example() {
  return 'Hello World!';
}"
          className="w-full h-80 p-4 font-mono text-sm 
                     bg-white border border-primary-500/30 rounded-lg 
                     focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 focus:outline-none
                     placeholder-slate-500 resize-none
                     transition-all duration-200"
          style={{ color: '#000000' }}
          spellCheck="false"
        />
        
        {/* Line numbers effect */}
        <div className="absolute top-4 left-2 text-xs text-gray-600 font-mono leading-5 pointer-events-none select-none">
          {Array.from({ length: Math.max(20, value.split('\n').length) }, (_, i) => (
            <div key={i} className="h-5 flex items-center">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};