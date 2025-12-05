import React, { useState, useRef, useEffect } from 'react';
import { askChapter } from '../services/geminiService';
import { BookChapter, LoadingState } from '../types';
import { AIMarker } from './AIMarker';

interface ChapterToolsProps {
  chapter: BookChapter;
}

export const ChapterTools: React.FC<ChapterToolsProps> = ({ chapter }) => {
  // TTS State
  const [isPlaying, setIsPlaying] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Chat/Ask State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [chatStatus, setChatStatus] = useState<LoadingState>(LoadingState.IDLE);

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    return () => {
      if (synthRef.current && isPlaying) {
        synthRef.current.cancel();
      }
    };
  }, [isPlaying]);

  const toggleAudio = () => {
    if (!synthRef.current) return;

    if (isPlaying) {
      synthRef.current.cancel();
      setIsPlaying(false);
    } else {
      utteranceRef.current = new SpeechSynthesisUtterance(chapter.content);
      utteranceRef.current.lang = 'pt-BR';
      utteranceRef.current.rate = 1.0;
      utteranceRef.current.onend = () => setIsPlaying(false);
      
      synthRef.current.speak(utteranceRef.current);
      setIsPlaying(true);
    }
  };

  const handleAsk = async () => {
    if (!question.trim()) return;
    setChatStatus(LoadingState.LOADING);
    const result = await askChapter(chapter.content, question);
    setAnswer(result);
    setChatStatus(LoadingState.SUCCESS);
  };

  return (
    <div className="mt-6 pt-6 border-t border-slate-100">
      <div className="flex items-center gap-3 mb-4">
        <AIMarker size="sm" />
        <span className="text-xs font-bold text-slate-400 uppercase">Ferramentas de Estudo</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {/* Audio Button */}
        <button
          onClick={toggleAudio}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            isPlaying 
              ? 'bg-red-50 text-red-600 border border-red-200 animate-pulse' 
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          {isPlaying ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              Parar Leitura
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              Ouvir Capítulo
            </>
          )}
        </button>

        {/* Ask Button (Toggles Input) */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
            isChatOpen 
             ? 'bg-violet-50 border-violet-200 text-violet-700' 
             : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Pergunte ao Capítulo
        </button>
      </div>

      {/* Contextual Chat Area */}
      {isChatOpen && (
        <div className="mt-4 bg-gradient-to-br from-violet-50 to-white rounded-xl border border-violet-100 p-4 ai-glow">
          <div className="flex items-start gap-3 mb-3">
             <div className="bg-violet-100 p-2 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5c0-5.523 4.477-10 10-10z"/></svg>
             </div>
             <div>
               <h4 className="text-sm font-bold text-violet-900">Tira-Dúvidas IA</h4>
               <p className="text-xs text-violet-600">Pergunte algo específico sobre o conteúdo deste capítulo.</p>
             </div>
          </div>

          <div className="flex gap-2">
            <input 
              type="text" 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex: Qual o conceito principal abordado?"
              className="flex-1 text-sm px-3 py-2 rounded border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-300"
              onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
            />
            <button 
              onClick={handleAsk}
              disabled={chatStatus === LoadingState.LOADING || !question}
              className="bg-violet-600 text-white px-3 py-2 rounded text-sm hover:bg-violet-700 disabled:opacity-50"
            >
              {chatStatus === LoadingState.LOADING ? (
                 <span className="w-4 h-4 block rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
              ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              )}
            </button>
          </div>

          {answer && (
            <div className="mt-3 p-3 bg-white rounded-lg border border-violet-100 text-sm text-slate-700 leading-relaxed animate-fade-in shadow-sm">
              <span className="font-bold text-violet-600 block mb-1">Resposta:</span>
              {answer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};