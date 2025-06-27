import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative z-20 bg-gradient-to-r from-vault-blue via-vault-blue-dark to-industrial-olive p-6 shadow-vault-door border-b-4 border-fallout-brass">
      <div className="metal-panel p-6 rounded-lg mx-auto max-w-4xl">
        <div className="flex flex-col items-center space-y-4">
          {/* Vault-Tec Logo ASCII */}
          <div className="text-center">
            <pre className="font-fallout-pixel text-warning-yellow text-sm leading-none terminal-text">
{`██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
██║   ██║███████║██║   ██║██║     ██║   
╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║   
 ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║   
  ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝`}
            </pre>
          </div>
          
          {/* Main Title */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-fallout-heading font-black text-warning-yellow terminal-text mb-2">
              FALLOUT CODE TERMINAL
            </h1>
            <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-screen-green font-fallout-mono">
              <div className="w-2 h-2 bg-screen-green rounded-full animate-terminal-blink"></div>
              <span className="terminal-text">AI-POWERED CODE ANALYSIS SYSTEM</span>
              <div className="w-2 h-2 bg-screen-green rounded-full animate-terminal-blink"></div>
            </div>
          </div>

          {/* Status Display */}
          <div className="bg-fallout-charcoal p-4 rounded border-2 border-vault-blue shadow-terminal w-full max-w-2xl">
            <div className="grid grid-cols-3 gap-4 text-center text-sm font-fallout-pixel">
              <div>
                <div className="text-copper-green terminal-text">SYSTEMS</div>
                <div className="text-screen-green">ONLINE</div>
              </div>
              <div>
                <div className="text-copper-green terminal-text">AI CORE</div>
                <div className="text-screen-green">ACTIVE</div>
              </div>
              <div>
                <div className="text-copper-green terminal-text">SECURITY</div>
                <div className="text-warning-yellow animate-flicker">SECURE</div>
              </div>
            </div>
          </div>

          {/* Flavor Text */}
          <div className="text-center">
            <p className="text-fallout-tan font-fallout-mono text-sm md:text-base">
              "Better Living Through Superior Code Quality"
            </p>
            <p className="text-copper-green text-xs mt-1 font-fallout-pixel">
              - Vault-Tec Quality Assurance Division
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-2 left-2 w-4 h-4 bg-warning-yellow rounded-full animate-flicker opacity-60"></div>
        <div className="absolute top-2 right-2 w-4 h-4 bg-screen-green rounded-full animate-terminal-blink opacity-60"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 bg-copper-green rounded-full opacity-60"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-vault-blue-light rounded-full animate-pulse opacity-60"></div>
      </div>
    </header>
  );
};