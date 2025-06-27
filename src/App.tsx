import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { CodeInput } from './components/CodeInput';
import { LanguageSelector } from './components/LanguageSelector';
import { SubmitButton } from './components/SubmitButton';
import { ReviewOutput } from './components/ReviewOutput';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { reviewCodeWithGemini } from './services/geminiService';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './constants';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>(DEFAULT_LANGUAGE);
  const [reviewFeedback, setReviewFeedback] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleReviewCode = useCallback(async () => {
    if (!code.trim()) {
      setError('Please enter some code to review.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setReviewFeedback('');

    try {
      const feedback = await reviewCodeWithGemini(code, selectedLanguage);
      setReviewFeedback(feedback);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred during code review.');
      }
      console.error('Review Error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [code, selectedLanguage]);

  return (
    <div className="min-h-screen bg-fallout-charcoal text-fallout-tan font-fallout-mono relative overflow-hidden scan-lines">
      {/* Background ambient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-fallout-charcoal via-vault-blue-dark to-fallout-charcoal opacity-50"></div>
      
      {/* Scan line animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-screen-green to-transparent opacity-30 animate-scan-line"></div>
      </div>

      <Header />
      
      <main className="relative z-10 flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto">
        {/* Input Panel - Styled as Vault-Tec Terminal */}
        <div className="lg:w-1/2 space-y-6">
          <div className="metal-panel p-6 rounded-lg shadow-vault-door rivet">
            <div className="rivet::after top-4 left-4"></div>
            <div className="rivet::after top-4 right-4"></div>
            <div className="rivet::after bottom-4 left-4"></div>
            <div className="rivet::after bottom-4 right-4"></div>
            
            <div className="bg-fallout-charcoal p-4 rounded border-2 border-vault-blue shadow-terminal">
              <div className="flex items-center mb-4 text-screen-green text-sm font-fallout-pixel">
                <div className="w-2 h-2 bg-screen-green rounded-full mr-2 animate-terminal-blink"></div>
                <span>VAULT-TEC TERMINAL v2.1.7</span>
              </div>
              
              <CodeInput value={code} onChange={setCode} />
            </div>
          </div>

          <div className="metal-panel p-4 rounded-lg">
            <div className="mb-4">
              <label className="block text-warning-yellow font-fallout-heading text-sm font-bold mb-2 terminal-text">
                PROGRAMMING LANGUAGE
              </label>
              <LanguageSelector
                languages={SUPPORTED_LANGUAGES}
                selectedLanguage={selectedLanguage}
                onChange={setSelectedLanguage}
              />
            </div>
            
            <SubmitButton onClick={handleReviewCode} isLoading={isLoading} />
            
            {isLoading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
          </div>
        </div>

        {/* Output Panel - Styled as Data Processing Unit */}
        <div className="lg:w-1/2">
          <div className="metal-panel p-6 rounded-lg shadow-vault-door h-full rivet">
            <div className="rivet::after top-4 left-4"></div>
            <div className="rivet::after top-4 right-4"></div>
            <div className="rivet::after bottom-4 left-4"></div>
            <div className="rivet::after bottom-4 right-4"></div>
            
            <div className="bg-fallout-charcoal p-4 rounded border-2 border-copper-green shadow-terminal h-full">
              <div className="flex items-center justify-between mb-4 text-copper-green text-sm font-fallout-pixel">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-copper-green rounded-full mr-2 animate-terminal-blink"></div>
                  <span>DATA ANALYSIS UNIT</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-warning-yellow rounded-full animate-flicker"></div>
                  <div className="w-2 h-2 bg-screen-green rounded-full"></div>
                  <div className="w-2 h-2 bg-copper-green rounded-full"></div>
                </div>
              </div>
              
              <ReviewOutput feedback={reviewFeedback} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </main>

      {/* Floating ambient elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-vault-blue opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-warning-yellow opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-copper-green opacity-10 rounded-full blur-3xl animate-pulse"></div>

      {/* Vault Boy ASCII Art */}
      <div className="absolute bottom-4 right-4 z-20">
        <pre className="font-fallout-pixel text-screen-green text-xs leading-none terminal-text opacity-70">
{`    ___
   /   \\
  | (o) |
   \\___/
   _|_|_
  |VAULT|
  |-----|
   |_|_|`}
        </pre>
      </div>
    </div>
  );
};

export default App;