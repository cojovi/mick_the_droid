import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative z-20 border-b border-primary-500/20">
      <div className="glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  CodeLens AI
                </h1>
                <p className="text-xs text-gray-400">Intelligent Code Analysis</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium">
                About
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white text-sm font-medium hover:from-primary-600 hover:to-accent-600 transition-all duration-200 shadow-glow">
                Get Started
              </button>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mt-12 mb-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">INTELLIGENT</span>{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent text-glow">
                CODE REVIEW
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Get instant, comprehensive feedback on your code with AI-powered analysis and suggestions
            </p>
            
            {/* Status Bar */}
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400">AI Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Ready for Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span className="text-gray-400">17+ Languages Supported</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};