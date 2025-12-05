import React from 'react';

export const AIMarker: React.FC<{ label?: string, size?: 'sm' | 'md' }> = ({ label = "Recurso IA", size = 'md' }) => {
  return (
    <div className={`inline-flex items-center gap-1 bg-gradient-to-r from-violet-100 to-fuchsia-100 border border-violet-200 text-violet-700 rounded-full font-bold uppercase tracking-wider ${size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size === 'sm' ? 10 : 12} height={size === 'sm' ? 10 : 12} viewBox="0 0 24 24" fill="currentColor" className="animate-pulse-slow">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
      {label}
    </div>
  );
};