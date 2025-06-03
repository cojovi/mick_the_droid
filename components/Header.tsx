import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-aurora-navy via-aurora-deep-purple to-aurora-vivid-purple p-6 shadow-neon-purple rounded-b-3xl border-b-4 border-aurora-mint relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center">
        {/* Pixel/ASCII Logo Placeholder */}
        <div className="mb-3">
          <pre className="font-pixel text-aurora-mint text-xs leading-none drop-shadow-[0_0_8px_#47FFBF]">
{`   ____  
  / __ \ 
 | |  | |
 | |  | |
 | |__| |
  \____/ `}
          </pre>
        </div>
        <h1 className="text-3xl md:text-5xl font-pixel tracking-tight drop-shadow-[0_0_12px_#47FFBF] text-aurora-mint text-center mb-2 animate-pulse">
          Cojovi's 24-hr Code Critic & Assistant
        </h1>
        <p className="mt-1 text-lg md:text-2xl font-pixel text-aurora-aqua text-center drop-shadow-[0_0_8px_#35DECE]">
          Paste the Code Shit Show Here
        </p>
        {/* Fun ASCII Critter */}
        <div className="mt-4">
          <pre className="font-pixel text-aurora-blue text-xs leading-none drop-shadow-[0_0_8px_#2D9ABB]">
{`  [^_^]  < Hello, human!`}
          </pre>
        </div>
      </div>
      {/* Glowing floating shape */}
      <div className="absolute top-2 right-8 w-24 h-24 bg-aurora-mint opacity-30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-aurora-vivid-purple opacity-20 rounded-full blur-2xl animate-pulse" />
    </header>
  );
};
