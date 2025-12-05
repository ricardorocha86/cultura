
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line } from 'recharts';
import { DIAGNOSTIC_STATS, EVOLUTION_DATA } from '../constants';

const REGIONAL_DATA = [
  { name: 'Norte', pontos: 400 },
  { name: 'Nordeste', pontos: 1200 },
  { name: 'Centro-Oeste', pontos: 350 },
  { name: 'Sudeste', pontos: 1800 },
  { name: 'Sul', pontos: 750 },
];

const CATEGORY_DATA = [
  { name: 'Audiovisual', value: 400 },
  { name: 'Música', value: 300 },
  { name: 'Tradição', value: 300 },
  { name: 'Digital', value: 200 },
];

const COLORS = ['#4338ca', '#be185d', '#f59e0b', '#10b981'];

export const DiagnosticHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-slate-200 py-8 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark">Painel Diagnóstico Nacional</h1>
              <p className="text-slate-500 text-sm mt-1">Dados consolidados do Sistema Nacional de Informações Culturais (SNIC)</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
               <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                 Exportar PDF
               </button>
               <button className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-dark transition-colors flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
                 Filtrar Dados
               </button>
            </div>
          </div>
          
          {/* Fake Filters Toolbar */}
          <div className="flex flex-wrap gap-4 text-sm border-t border-slate-100 pt-4">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-md text-slate-600 cursor-pointer hover:bg-slate-200">
               <span>Ano: 2025</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-md text-slate-600 cursor-pointer hover:bg-slate-200">
               <span>Região: Todas</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-md text-slate-600 cursor-pointer hover:bg-slate-200">
               <span>Tipo: Ponto de Cultura</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {DIAGNOSTIC_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-800">
                  {stat.value.toLocaleString()}<span className="text-lg text-slate-400 font-normal">{stat.unit || ''}</span>
                </p>
              </div>
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-slate-50 border border-slate-100">
                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stat.color }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
           {/* Regional Distribution */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-brand-dark">Distribuição Regional</h3>
                <button className="text-brand-primary text-xs font-bold hover:underline">Ver Detalhes</button>
             </div>
             <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={REGIONAL_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#334155', fontSize: 12, fontWeight: 500}} width={100} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      cursor={{ fill: '#f1f5f9' }}
                    />
                    <Bar dataKey="pontos" fill="#4338ca" radius={[0, 4, 4, 0]} barSize={20} />
                 </BarChart>
               </ResponsiveContainer>
             </div>
           </div>

           {/* Category Distribution */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-brand-dark">Áreas de Atuação</h3>
                <button className="text-brand-primary text-xs font-bold hover:underline">Ver Detalhes</button>
             </div>
             <div className="h-[300px] w-full flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <Pie
                      data={CATEGORY_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {CATEGORY_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                 </PieChart>
               </ResponsiveContainer>
             </div>
           </div>
        </div>

        {/* Evolution Chart (Time Series) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-lg font-bold text-brand-dark">Evolução da Rede (2020-2025)</h3>
               <div className="flex gap-4 text-sm">
                   <span className="flex items-center gap-1 text-slate-500"><div className="w-2 h-2 rounded-full bg-brand-primary"></div> Pontos Ativos</span>
                   <span className="flex items-center gap-1 text-slate-500"><div className="w-2 h-2 rounded-full bg-brand-secondary"></div> Investimento (M)</span>
               </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={EVOLUTION_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                  <Line yAxisId="left" type="monotone" dataKey="pontos" stroke="#4338ca" strokeWidth={3} activeDot={{ r: 8 }} />
                  <Line yAxisId="right" type="monotone" dataKey="investimento" stroke="#be185d" strokeWidth={3} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Full Width Report Table */}
           <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-brand-dark">Relatórios Recentes</h3>
                <button className="text-slate-500 hover:text-brand-primary transition-colors text-sm">Ver todos</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50 font-medium">
                    <tr>
                      <th className="px-6 py-3">Título do Relatório</th>
                      <th className="px-6 py-3">Responsável</th>
                      <th className="px-6 py-3">Data</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b hover:bg-slate-50 transition-colors cursor-pointer">
                      <td className="px-6 py-4 font-medium text-slate-900">Mapeamento Norte 2024</td>
                      <td className="px-6 py-4">Universidade Federal do Pará</td>
                      <td className="px-6 py-4">12/11/2024</td>
                      <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">Concluído</span></td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-slate-50 transition-colors cursor-pointer">
                      <td className="px-6 py-4 font-medium text-slate-900">Impacto da Lei Aldir Blanc</td>
                      <td className="px-6 py-4">Conselho Gestor</td>
                      <td className="px-6 py-4">02/12/2025</td>
                      <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Em Análise</span></td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-slate-50 transition-colors cursor-pointer">
                      <td className="px-6 py-4 font-medium text-slate-900">Economia Criativa Sul</td>
                      <td className="px-6 py-4">UFRGS</td>
                      <td className="px-6 py-4">28/11/2025</td>
                      <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">Revisão</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
           </div>

           {/* Methodology Sidebar */}
           <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
                 Metodologia
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                 Os dados apresentados são coletados através de formulários auto-declaratórios preenchidos pelos Pontos de Cultura e validados por equipes regionais das universidades parceiras.
              </p>
              <ul className="text-sm text-slate-600 space-y-2 mb-6">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Atualização Trimestral</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Validação por Amostragem</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Integração com Mapas Culturais</li>
              </ul>
              <button className="w-full bg-white border border-slate-300 text-slate-700 py-2 rounded-lg text-sm font-medium hover:bg-white hover:border-brand-primary hover:text-brand-primary transition-colors">
                 Baixar Documentação Técnica
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
