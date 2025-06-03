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
    <div className="flex flex-col h-screen bg-gradient-to-br from-aurora-navy via-aurora-deep-purple to-aurora-blue text-white font-pixel relative overflow-hidden">
      <Header />
      <main className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* Input Panel */}
        <div className="md:w-1/2 flex flex-col p-8 m-4 bg-white/10 backdrop-blur-lg shadow-neon-mint border-2 border-aurora-mint rounded-3xl overflow-y-auto space-y-8 relative z-10">
          <CodeInput value={code} onChange={setCode} />
          <div>
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

        {/* Output Panel */}
        <div className="md:w-1/2 flex flex-col p-8 m-4 bg-white/10 backdrop-blur-lg shadow-neon-purple border-2 border-aurora-vivid-purple rounded-3xl overflow-y-auto relative z-10">
           <ReviewOutput feedback={reviewFeedback} isLoading={isLoading} />
        </div>
      </main>
      {/* Floating neon shapes for techy/futuristic look */}
      <div className="absolute top-24 left-1/3 w-40 h-40 bg-aurora-mint opacity-20 rounded-full blur-2xl animate-pulse z-0" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-aurora-vivid-purple opacity-20 rounded-full blur-2xl animate-pulse z-0" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-aurora-aqua opacity-20 rounded-full blur-2xl animate-pulse z-0" />
      {/* ASCII/pixel art floating element */}
      <div className="absolute bottom-4 left-4 z-20">
        <pre className="font-pixel text-aurora-mint text-xs leading-none drop-shadow-[0_0_8px_#47FFBF]">
{`  //\\  
 (o.o)  
  >^<   `}
        </pre>
      </div>
    </div>
  );
};

export default App;
