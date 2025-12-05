import React, { useState, useMemo } from 'react';
import { BOOK_CHAPTERS, BOOK_COMMENTS } from '../constants';
import { ChapterTools } from '../components/ChapterTools';
import { ChapterReader } from '../components/ChapterReader';
import { BookChapter } from '../types';
import { useNavigate } from 'react-router-dom';
import { AIMarker } from '../components/AIMarker';

export const BookHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [readingChapter, setReadingChapter] = useState<BookChapter | null>(null);
  const navigate = useNavigate();

  // Client-side search logic (simulating Fuse.js/Algolia)
  const filteredChapters = useMemo(() => {
    if (!searchTerm) return BOOK_CHAPTERS;
    const lowerTerm = searchTerm.toLowerCase();
    return BOOK_CHAPTERS.filter(chapter => 
      chapter.title.toLowerCase().includes(lowerTerm) || 
      chapter.content.toLowerCase().includes(lowerTerm) ||
      chapter.summary.toLowerCase().includes(lowerTerm) ||
      chapter.author.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <ChapterReader 
        chapter={readingChapter || BOOK_CHAPTERS[0]} 
        isOpen={!!readingChapter} 
        onClose={() => setReadingChapter(null)} 
      />

      {/* Immersive Header with Book Cover Simulation */}
      <div className="bg-brand-dark text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/3 flex justify-center">
             {/* Book Cover Mockup */}
             <div className="w-64 h-96 bg-gradient-to-br from-brand-primary to-brand-dark rounded-r-2xl rounded-l-md shadow-2xl transform rotate-y-12 border-l-8 border-slate-800 flex flex-col justify-between p-6 relative group hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                <div>
                   <span className="text-xs tracking-widest uppercase opacity-70">Consórcio Cultura Viva</span>
                   <h1 className="text-3xl font-serif font-bold mt-4 leading-tight">Cultura Viva:<br/>Teoria e Prática</h1>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm opacity-80">Org: Ana Souza & Carlos Mendes</p>
                  <p className="text-xs opacity-50 mt-1">Edição 2025</p>
                </div>
             </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-3 py-1 bg-brand-accent text-brand-dark rounded font-bold text-xs uppercase tracking-wide">
                 Disponível Digitalmente
              </span>
              <AIMarker label="IA Integrada" size="sm" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
               O guia definitivo sobre políticas culturais comunitárias.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
               Uma obra colaborativa que reúne mais de 30 pesquisadores de 15 universidades. 
               Explore os fundamentos históricos, estratégias de gestão e inovações tecnológicas que estão moldando o futuro da cultura no Brasil.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl relative">
               <input 
                 type="text" 
                 placeholder="Busque por capítulos, autores ou conceitos..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full px-6 py-4 rounded-xl text-slate-800 shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-primary/30 text-lg"
               />
               <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
               </div>
            </div>
            
            <div className="mt-6 flex gap-4 text-sm text-slate-400">
               <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg> 5 Capítulos</span>
               <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> 5 Autores</span>
               <span className="flex items-center gap-1 text-brand-accent">★ Leitura Gratuita</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
         <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Chapters */}
            <div className="lg:w-2/3">
               <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h2 className="text-xl font-bold text-brand-dark font-serif">Índice da Obra</h2>
                    <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded border border-slate-200 shadow-sm">{filteredChapters.length} resultados</span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {filteredChapters.length > 0 ? (
                      filteredChapters.map((chapter) => (
                        <div key={chapter.id} className="p-8 hover:bg-slate-50 transition-colors group">
                           <div className="flex justify-between items-start mb-2">
                             <span className="text-xs font-bold text-brand-secondary uppercase tracking-wider">{chapter.author}</span>
                             <span className="text-xs text-slate-400">~15 min de leitura</span>
                           </div>
                           <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3 group-hover:text-brand-primary transition-colors cursor-pointer">{chapter.title}</h3>
                           <p className="text-slate-600 leading-relaxed mb-6">{chapter.summary}</p>
                           
                           {/* Action Bar */}
                           <div className="flex flex-wrap items-center gap-4">
                              <button 
                                onClick={() => setReadingChapter(chapter)}
                                className="bg-brand-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-brand-dark transition-colors flex items-center gap-2 text-sm shadow-sm"
                              >
                                Ler Agora
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                              </button>
                              
                              <button className="ml-auto text-slate-400 hover:text-brand-secondary transition-colors" title="Adicionar aos Favoritos">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                              </button>
                           </div>

                           {/* Chapter Tools (AI Features) */}
                           <ChapterTools chapter={chapter} />
                        </div>
                      ))
                    ) : (
                       <div className="text-center py-20 px-6">
                          <p className="text-slate-500 text-lg">Nenhum capítulo encontrado para "{searchTerm}".</p>
                          <button onClick={() => setSearchTerm('')} className="text-brand-primary font-bold mt-2 hover:underline">Limpar busca</button>
                       </div>
                    )}
                  </div>
               </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:w-1/3 space-y-6">
               {/* About Authors */}
               <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
                  <h3 className="font-bold text-brand-dark mb-4 border-b pb-2">Organizadores</h3>
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">AS</div>
                     <div>
                        <p className="font-bold text-sm">Dra. Ana Souza</p>
                        <p className="text-xs text-slate-500">Universidade Federal do Rio de Janeiro</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">CM</div>
                     <div>
                        <p className="font-bold text-sm">Prof. Carlos Mendes</p>
                        <p className="text-xs text-slate-500">Universidade Federal da Bahia</p>
                     </div>
                  </div>
               </div>

               {/* Download CTA */}
               <div className="bg-brand-light rounded-xl shadow-md border border-brand-primary/20 p-6 text-center">
                  <h3 className="font-bold text-brand-dark mb-2">Prefere ler offline?</h3>
                  <p className="text-sm text-slate-600 mb-4">Baixe o PDF completo do livro para ler no seu e-reader ou tablet.</p>
                  <button className="w-full bg-white border border-slate-300 text-slate-700 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors flex justify-center items-center gap-2 text-sm">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                     Download PDF (15MB)
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Community / Comments Section */}
      <section className="container mx-auto px-4 mt-16 pt-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-2xl font-serif font-bold text-brand-dark mb-8 flex items-center gap-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
             Comunidade de Leitores
           </h2>

           {/* Comment Form */}
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
             <textarea 
               className="w-full p-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-sm resize-none"
               rows={3}
               placeholder="Deixe sua contribuição, dúvida ou análise sobre o livro..."
             ></textarea>
             <div className="flex justify-between items-center mt-3">
               <span className="text-xs text-slate-400">Faça login para publicar</span>
               <button className="bg-brand-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-brand-dark transition-colors">
                 Enviar Comentário
               </button>
             </div>
           </div>

           {/* Comments List */}
           <div className="space-y-6">
             {BOOK_COMMENTS.map((comment) => (
               <div key={comment.id} className="flex gap-4">
                 <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full border border-slate-200" />
                 <div className="flex-1">
                   <div className="bg-white rounded-xl rounded-tl-none p-4 shadow-sm border border-slate-100">
                     <div className="flex justify-between items-start mb-2">
                       <div>
                         <h4 className="font-bold text-slate-800 text-sm">{comment.author}</h4>
                         <p className="text-xs text-slate-500">{comment.role}</p>
                       </div>
                       <span className="text-xs text-slate-400">{comment.date}</span>
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">{comment.text}</p>
                   </div>
                   <div className="flex items-center gap-4 mt-2 ml-2">
                      <button className="text-xs text-slate-500 font-bold hover:text-brand-primary flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                        Curtir ({comment.likes})
                      </button>
                      <button className="text-xs text-slate-500 font-bold hover:text-brand-primary">Responder</button>
                   </div>
                 </div>
               </div>
             ))}
           </div>

           <div className="text-center mt-8">
             <button className="text-brand-primary font-bold text-sm hover:underline">Ver mais comentários</button>
           </div>
        </div>
      </section>
    </div>
  );
};