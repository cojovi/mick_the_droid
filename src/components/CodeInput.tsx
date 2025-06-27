import React from 'react';

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const CodeInput: React.FC<CodeInputProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <div className="mb-2 flex items-center justify-between">
        <label className="text-screen-green font-fallout-pixel text-xs terminal-text">
          CODE INPUT BUFFER
        </label>
        <div className="flex items-center space-x-2 text-xs">
          <span className="text-copper-green font-fallout-mono">
            CHARS: {value.length}
          </span>
          <div className="w-1 h-1 bg-screen-green rounded-full animate-terminal-blink"></div>
        </div>
      </div>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="// PASTE YOUR CODE FOR ANALYSIS...
// VAULT-TEC RECOMMENDS PROPER DOCUMENTATION
// FOR OPTIMAL WASTELAND SURVIVAL"
        className="w-full h-72 p-4 font-fallout-mono text-sm 
                   bg-black text-screen-green 
                   border-2 border-copper-green rounded 
                   shadow-terminal resize-none
                   focus:border-warning-yellow focus:shadow-glow-yellow focus:outline-none
                   placeholder-copper-green placeholder-opacity-50
                   transition-all duration-200"
        spellCheck="false"
        style={{
          textShadow: '0 0 5px currentColor',
          caretColor: '#7CFF70'
        }}
      />
      
      {/* Terminal cursor effect */}
      <div className="absolute bottom-4 right-4 text-screen-green animate-terminal-blink font-fallout-mono text-sm">
        █
      </div>
    </div>
  );
};