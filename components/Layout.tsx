
import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { AIChatBot } from './AIChatBot';
import { User } from '../types';

export const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0); // Ensure scroll to top on navigation
  };

  const isPathActive = (path: string) => {
      return location.pathname === path; 
  };

  const handleGoogleLogin = () => {
    // Simulating a Google Login action
    setUser({
      name: "Visitante Beta",
      email: "visitante@culturaviva.org",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation('/')}>
             <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xs">CV</div>
             <span className="font-serif font-bold text-lg md:text-xl text-brand-dark tracking-tight">
               Consórcio Cultura Viva
             </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = isPathActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                    active ? 'text-brand-primary font-bold' : 'text-slate-600 hover:text-brand-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            {user ? (
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden lg:block">
                  <p className="text-xs font-bold text-slate-700">{user.name}</p>
                  <p className="text-[10px] text-slate-500">Pesquisador</p>
                </div>
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full border border-slate-200 shadow-sm"
                />
              </div>
            ) : (
              <button 
                onClick={handleGoogleLogin}
                className="flex items-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2 rounded-full text-xs font-bold hover:bg-slate-50 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                  <path d="M3.15302 7.3455L6.43852 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z" fill="#FF3D00"/>
                  <path d="M12 22C14.666 22 17.054 21.0265 18.84 19.4625L15.547 16.8925C14.5425 17.5995 13.3155 18 12 18C9.3565 18 7.1195 16.305 6.2905 13.9875L3.016 16.518C4.722 19.7895 8.0825 22 12 22Z" fill="#4CAF50"/>
                  <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.257 15.108 16.5165 16.0965 15.5475 16.8925L18.8405 19.4625C18.232 18.9185 21.3785 16.571 21.8055 10.0415Z" fill="#1976D2"/>
                </svg>
                Entrar com Google
              </button>
            )}
          </nav>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-slate-600 p-2 hover:bg-slate-100 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global AI Chatbot */}
      <AIChatBot />

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <div className="flex items-center gap-2 mb-4 text-white">
                <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded flex items-center justify-center text-[10px] font-bold">CV</div>
                <h4 className="font-serif font-bold text-lg">Cultura Viva</h4>
             </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Articulando ensino, pesquisa e extensão para fortalecer as políticas culturais de base comunitária no Brasil.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div>
               <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></div>
            </div>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Explorar</h5>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                    <button 
                        onClick={() => handleNavigation(item.path)}
                        className="hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0 text-left text-slate-400 hover:pl-1 duration-200"
                    >
                        {item.label}
                    </button>
                </li>
              ))}
              <li><button className="text-slate-400 hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0 text-left hover:pl-1 duration-200">Área do Pesquisador</button></li>
              <li><button className="text-slate-400 hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0 text-left hover:pl-1 duration-200">Edital 2025</button></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Recursos</h5>
            <ul className="space-y-3 text-sm">
              <li><button className="text-slate-400 hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0 text-left hover:pl-1 duration-200">Base de Dados Aberta</button></li>
              <li><button className="text-slate-400 hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0 text-left hover:pl-1 duration-200">Biblioteca Digital</button></li>
              <li><button className="text-slate-400 hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0 text-left hover:pl-1 duration-200">Tutoriais de Gestão</button></li>
              <li><button className="text-slate-400 hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0 text-left hover:pl-1 duration-200">Imprensa</button></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Fale Conosco</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                 <svg className="w-5 h-5 text-brand-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 <span className="text-slate-400">contato@culturaviva.org</span>
              </li>
              <li className="flex items-start gap-3">
                 <svg className="w-5 h-5 text-brand-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 <span className="text-slate-400">Esplanada dos Ministérios, Bloco B<br/>Brasília, DF - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 Consórcio Universitário Cultura Viva. Todos os direitos reservados.</p>
          <div className="flex gap-6">
             <button className="hover:text-white transition-colors">Termos de Uso</button>
             <button className="hover:text-white transition-colors">Política de Privacidade</button>
             <button className="hover:text-white transition-colors">Acessibilidade</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
