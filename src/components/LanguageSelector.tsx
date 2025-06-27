import React from 'react';
import { LanguageOption } from '../types';

interface LanguageSelectorProps {
  languages: LanguageOption[];
  selectedLanguage: string;
  onChange: (value: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  languages, 
  selectedLanguage, 
  onChange 
}) => {
  return (
    <div className="relative">
      <select
        value={selectedLanguage}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 bg-fallout-charcoal text-warning-yellow 
                   border-2 border-industrial-olive rounded 
                   shadow-metal font-fallout-mono text-sm
                   focus:border-warning-yellow focus:shadow-glow-yellow focus:outline-none
                   appearance-none cursor-pointer
                   transition-all duration-200"
        style={{ textShadow: '0 0 3px currentColor' }}
      >
        {languages.map((lang) => (
          <option 
            key={lang.value} 
            value={lang.value}
            className="bg-fallout-charcoal text-warning-yellow"
          >
            {lang.label.toUpperCase()}
          </option>
        ))}
      </select>
      
      {/* Custom dropdown arrow */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-warning-yellow"></div>
      </div>
      
      {/* Status indicator */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-screen-green rounded-full animate-terminal-blink"></div>
    </div>
  );
};