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
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-300">
        Programming Language
      </label>
      
      <div className="relative">
        <select
          value={selectedLanguage}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 bg-dark-900 text-gray-100 
                     border border-primary-500/30 rounded-lg 
                     focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 focus:outline-none
                     appearance-none cursor-pointer font-medium
                     transition-all duration-200"
        >
          {languages.map((lang) => (
            <option 
              key={lang.value} 
              value={lang.value}
              className="bg-dark-900 text-gray-100"
            >
              {lang.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {/* Status indicator */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full"></div>
      </div>
    </div>
  );
};