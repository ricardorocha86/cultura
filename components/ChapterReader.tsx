import React from 'react';
import { BookChapter } from '../types';

interface ChapterReaderProps {
  chapter: BookChapter;
  isOpen: boolean;
  onClose: () => void;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({ chapter, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-3xl h-[85vh] rounded-2xl shadow-2xl flex flex-col relative overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50">
          <div>
            <span className="text-xs font-bold text-brand-secondary uppercase tracking-wider mb-1 block">Leitura em Andamento</span>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">{chapter.title}</h2>
            <p className="text-sm text-slate-500 mt-1">Por {chapter.author}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 font-serif text-lg leading-loose text-slate-700">
           {/* Simulando formatação de parágrafos */}
           {chapter.content.split('. ').map((sentence, index) => (
             <p key={index} className="mb-6">
               {sentence}.
             </p>
           ))}
           <div className="mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 italic text-sm font-sans">
             Fim do Capítulo
           </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-between items-center text-sm font-sans">
          <span className="text-slate-500">Página 1 de 1</span>
          <button 
            onClick={onClose} 
            className="text-brand-primary font-bold hover:underline"
          >
            Fechar Leitura
          </button>
        </div>
      </div>
    </div>
  );
};