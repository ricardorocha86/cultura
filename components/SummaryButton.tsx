import React, { useState } from 'react';
import { summarizeContent } from '../services/geminiService';
import { LoadingState } from '../types';

interface SummaryButtonProps {
  content: string;
}

export const SummaryButton: React.FC<SummaryButtonProps> = ({ content }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSummarize = async () => {
    setStatus(LoadingState.LOADING);
    const result = await summarizeContent(content);
    setSummary(result);
    setStatus(LoadingState.SUCCESS);
  };

  return (
    <div className="my-4">
      {status === LoadingState.IDLE && (
        <button
          onClick={handleSummarize}
          className="flex items-center gap-2 text-sm font-medium text-brand-primary bg-brand-primary/5 hover:bg-brand-primary/10 px-4 py-2 rounded-full transition-colors border border-brand-primary/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Resumir Capítulo com IA
        </button>
      )}

      {status === LoadingState.LOADING && (
        <div className="flex items-center gap-2 text-sm text-slate-500 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
          Gerando resumo inteligente...
        </div>
      )}

      {status === LoadingState.SUCCESS && summary && (
        <div className="bg-brand-light border border-brand-primary/20 p-4 rounded-xl mt-2 relative">
           <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-brand-primary text-white text-xs px-2 py-1 rounded shadow-sm">
             Gerado por IA
           </div>
           <h5 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
             Resumo Executivo
           </h5>
           <div className="prose prose-sm text-slate-600">
              <div dangerouslySetInnerHTML={{ __html: summary.replace(/\n/g, '<br />') }} />
           </div>
        </div>
      )}
    </div>
  );
};
