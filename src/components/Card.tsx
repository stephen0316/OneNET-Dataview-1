import React from 'react';

export const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative flex flex-col panel-sci-fi ${className}`}>
      <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#00ffff] shadow-[0_0_10px_#00ffff]"></div>
      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00ffff] shadow-[0_0_10px_#00ffff]"></div>
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#00ffff] shadow-[0_0_10px_#00ffff]"></div>
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#00ffff] shadow-[0_0_10px_#00ffff]"></div>
      
      {title && (
        <div className="flex items-center px-4 py-3 border-b border-[#00ffff]/20 bg-gradient-to-r from-[#00ffff]/10 to-transparent relative z-10">
          <div className="w-1 h-4 bg-[#00ffff] mr-3 shadow-[0_0_8px_#00ffff]"></div>
          <h3 className="text-[#00ffff] font-bold tracking-wider text-base text-glow">{title}</h3>
        </div>
      )}
      <div className="flex-1 p-4 overflow-hidden flex flex-col relative z-10">
        {children}
      </div>
    </div>
  );
};
