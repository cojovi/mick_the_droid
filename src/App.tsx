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
    <div className="min-h-screen bg-dark-950 text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
      <div className="fixed top-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="fixed bottom-20 right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-float"></div>

      <Header />
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="space-y-6">
            <div className="gradient-border p-6 shadow-card">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">Code Input</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400 font-mono">READY</span>
                  </div>
                </div>
                <CodeInput value={code} onChange={setCode} />
              </div>
            </div>

            <div className="gradient-border p-6 shadow-card">
              <div className="space-y-4">
                <LanguageSelector
                  languages={SUPPORTED_LANGUAGES}
                  selectedLanguage={selectedLanguage}
                  onChange={setSelectedLanguage}
                />
                <SubmitButton onClick={handleReviewCode} isLoading={isLoading} />
                {isLoading && <LoadingSpinner />}
                {error && <ErrorMessage message={error} />}
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="h-full">
            <div className="gradient-border p-6 shadow-card h-full min-h-[600px]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Analysis Results</h2>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${reviewFeedback ? 'bg-green-400' : isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-gray-600'}`}></div>
                  <span className="text-xs text-gray-400 font-mono">
                    {reviewFeedback ? 'COMPLETE' : isLoading ? 'PROCESSING' : 'WAITING'}
                  </span>
                </div>
              </div>
              <ReviewOutput feedback={reviewFeedback} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;