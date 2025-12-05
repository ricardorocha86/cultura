
import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { useNavigate } from 'react-router-dom';
import { PARTNERS, TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in bg-white">
      <HeroCarousel />
      
      {/* Manifesto Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-brand-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Nosso Manifesto</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                A cultura não é apenas um evento. <br/>
                <span className="text-brand-primary">É um direito.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                O Consórcio Universitário Cultura Viva nasceu da necessidade de conectar o saber acadêmico com a sabedoria popular. 
                Acreditamos que as políticas culturais devem ser baseadas em dados robustos e teorias que respeitem a diversidade territorial do Brasil.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Nossa missão é fornecer as ferramentas intelectuais e tecnológicas para que gestores, pesquisadores e fazedores de cultura possam transformar suas realidades.
              </p>
              <button 
                onClick={() => navigate('/abc')}
                className="inline-flex items-center text-brand-primary font-bold hover:text-brand-dark transition-colors text-lg group"
              >
                Conheça nossa base teórica
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/seed/cultura2/400/500" className="rounded-2xl shadow-xl mt-8" alt="Manifesto Cultura" />
               <img src="https://picsum.photos/seed/cultura3/400/500" className="rounded-2xl shadow-xl mb-8" alt="Manifesto Arte" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Blocks */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
              Pilares de Atuação
            </h2>
            <div className="h-1 w-20 bg-brand-secondary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Block 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
              <div className="h-56 bg-slate-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://picsum.photos/seed/block1/800/600" alt="Pesquisadores" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col relative">
                 <div className="absolute -top-6 right-8 bg-brand-primary text-white p-4 rounded-xl shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                 </div>
                 <h3 className="text-2xl font-serif font-bold text-brand-dark mb-3">Acervo Acadêmico</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                   Acesse a produção intelectual mais recente sobre cultura comunitária. Livros, artigos e teses disponíveis gratuitamente.
                 </p>
                 <button 
                    onClick={() => navigate('/abc')}
                    className="w-full py-3 rounded-lg border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-all duration-300"
                 >
                    Acessar Biblioteca
                 </button>
              </div>
            </div>

            {/* Block 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
              <div className="h-56 bg-slate-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-accent/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://picsum.photos/seed/block2/800/600" alt="Dados" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col relative">
                 <div className="absolute -top-6 right-8 bg-brand-accent text-white p-4 rounded-xl shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
                 </div>
                 <h3 className="text-2xl font-serif font-bold text-brand-dark mb-3">Observatório de Dados</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                   Dashboards interativos, mapas de calor e estatísticas em tempo real sobre o impacto dos Pontos de Cultura no Brasil.
                 </p>
                 <button 
                    onClick={() => navigate('/diagnostico')}
                    className="w-full py-3 rounded-lg border-2 border-brand-accent text-brand-accent font-bold hover:bg-brand-accent hover:text-white transition-all duration-300"
                 >
                    Explorar Dados
                 </button>
              </div>
            </div>

            {/* Block 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
              <div className="h-56 bg-slate-200 overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://picsum.photos/seed/block3/800/600" alt="Rede" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col relative">
                 <div className="absolute -top-6 right-8 bg-brand-secondary text-white p-4 rounded-xl shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                 </div>
                 <h3 className="text-2xl font-serif font-bold text-brand-dark mb-3">Rede Universitária</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                   Conecte-se com mais de 50 grupos de pesquisa. Editais abertos, bolsas de extensão e congressos acadêmicos.
                 </p>
                 <button 
                    className="w-full py-3 rounded-lg border-2 border-brand-secondary text-brand-secondary font-bold hover:bg-brand-secondary hover:text-white transition-all duration-300"
                 >
                    Ver Parceiros
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Partners */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
           <h3 className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm mb-10">
             Instituições que fazem parte do Consórcio
           </h3>
           <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {PARTNERS.map((partner, index) => (
                <div key={index} className="flex flex-col items-center">
                   <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xl border border-slate-200">
                     {partner.name}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-dark text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Impacto Real nos Territórios</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Como nossa pesquisa e tecnologia estão auxiliando gestores e produtores culturais em todo o Brasil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mb-6 text-brand-accent">
                   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.0547 14.5917 14.4141 15.7412 13.0781C16.8907 11.7422 18.5713 10.9844 20.7832 10.8047L20.7832 10.7422C20.4082 10.7422 20.0332 10.668 19.6582 10.5195C19.2832 10.3711 18.9912 10.1445 18.7822 9.83984C18.5732 9.53516 18.4692 9.17188 18.4692 8.75C18.4692 8.16406 18.6772 7.68359 19.0942 7.30859C19.5112 6.93359 20.0542 6.74609 20.7232 6.74609C21.4117 6.74609 21.9742 6.98047 22.4112 7.44922C22.8492 7.91797 23.0682 8.52344 23.0682 9.26562C23.0682 11.1641 22.3702 12.9844 20.9742 14.7266C19.5782 16.4688 17.2592 17.8203 14.0172 18.7812L14.017 21ZM3.0166 21L3.0166 18C3.0166 16.0547 3.5916 14.4141 4.74121 13.0781C5.89082 11.7422 7.57129 10.9844 9.7832 10.8047L9.7832 10.7422C9.4082 10.7422 9.0332 10.668 8.6582 10.5195C8.2832 10.3711 7.99121 10.1445 7.78223 9.83984C7.57324 9.53516 7.46924 9.17188 7.46924 8.75C7.46924 8.16406 7.67725 7.68359 8.09424 7.30859C8.51123 6.93359 9.0542 6.74609 9.72314 6.74609C10.4116 6.74609 10.9741 6.98047 11.4111 7.44922C11.8491 7.91797 12.0681 8.52344 12.0681 9.26562C12.0681 11.1641 11.3701 12.9844 9.97412 14.7266C8.57812 16.4688 6.25928 17.8203 3.01709 18.7812L3.0166 21Z"/></svg>
                </div>
                <p className="text-lg leading-relaxed italic text-slate-200 mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-white">{t.author}</h4>
                  <span className="text-sm text-slate-400">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-8 border-b pb-4 border-slate-200">
                Últimas Atualizações
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-primary hover:shadow-md transition-shadow cursor-pointer">
                    <span className="text-xs text-slate-500 font-bold uppercase">05 Dez 2025</span>
                    <h4 className="text-lg font-bold text-brand-dark mt-2 hover:text-brand-primary">Lançamento do Portal Beta</h4>
                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                        A nova plataforma digital integra IA para facilitar o acesso ao acervo acadêmico e visualização de dados em tempo real.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-accent hover:shadow-md transition-shadow cursor-pointer">
                    <span className="text-xs text-slate-500 font-bold uppercase">01 Dez 2025</span>
                    <h4 className="text-lg font-bold text-brand-dark mt-2 hover:text-brand-accent">Chamada de Artigos: Economia Criativa</h4>
                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                        A Revista Cultura e Território abre edital para dossiê sobre sustentabilidade financeira em Pontos de Cultura.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
