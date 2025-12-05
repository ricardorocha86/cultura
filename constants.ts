
import { BookChapter, CarouselSlide, DiagnosticStat, NavItem, Comment } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", path: "/" },
  { label: "O Livro", path: "/abc" },
  { label: "Diagnóstico", path: "/diagnostico" },
];

export const HERO_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: "Cultura Viva: Uma Nova Era",
    description: "Reimaginando as políticas culturais comunitárias através da pesquisa aplicada e inovação tecnológica.",
    image: "https://picsum.photos/seed/cultura1/1920/1080",
    link: "/abc",
    cta: "Ler o Livro"
  },
  {
    id: 2,
    title: "Diagnóstico Nacional 2025",
    description: "Dados inéditos sobre o impacto dos Pontos de Cultura no desenvolvimento territorial brasileiro.",
    image: "https://picsum.photos/seed/stats1/1920/1080",
    link: "/diagnostico",
    cta: "Ver Dados"
  },
  {
    id: 3,
    title: "Rede de Pesquisadores",
    description: "Conectando mais de 50 universidades para fortalecer a base teórica da cultura comunitária.",
    image: "https://picsum.photos/seed/uni1/1920/1080",
    link: "/",
    cta: "Saiba Mais"
  }
];

const LONG_TEXT_FILLER = `
  A implementação destas políticas requer uma compreensão profunda das dinâmicas locais. Não se trata apenas de distribuir recursos, mas de fomentar redes de colaboração que possam sustentar-se a longo prazo. O conceito de "empoderamento" aqui não é uma metáfora vazia, mas uma prática diária de gestão compartilhada.

  Ao analisarmos os dados coletados entre 2010 e 2024, percebemos uma correlação direta entre a longevidade dos projetos culturais e o nível de engajamento comunitário na tomada de decisão. Projetos impostos de cima para baixo tendem a falhar nos primeiros dois anos, enquanto iniciativas que nascem da base demonstram resiliência mesmo em períodos de escassez de recursos públicos.

  É fundamental notar que a tecnologia atua como um catalisador. Onde antes havia isolamento geográfico, hoje existe conexão digital. As redes sociais, embora corporativas, foram apropriadas por estes grupos para criar canais de distribuição de conteúdo que rivalizam com a mídia tradicional em alcance local. Isso muda a balança de poder. A narrativa não é mais monopólio dos grandes conglomerados de comunicação.

  Contudo, a brecha digital ainda é um desafio. A infraestrutura de internet em áreas rurais e periféricas continua precária, o que limita o potencial de expansão da economia criativa nestes territórios. O Estado precisa intervir não apenas com fomento à produção artística, mas com infraestrutura básica de conectividade. Sem isso, falamos de inclusão digital apenas na teoria.

  Outro aspecto crucial é a formação. A gestão cultural exige competências que vão da contabilidade à curadoria. As universidades federais, ao integrarem o Consórcio Cultura Viva, assumem o papel de polos de capacitação, oferecendo cursos de extensão que traduzem o "saber acadêmico" para a linguagem e as necessidades da ponta. Essa troca não é unilateral; a academia aprende tanto quanto ensina ao entrar em contato com as tecnologias sociais desenvolvidas nas favelas e aldeias.

  Em suma, o futuro da cultura comunitária no Brasil depende de um tripé: financiamento contínuo (garantido por leis de Estado), apropriação tecnológica crítica e formação continuada em gestão. Sem um destes pilares, a estrutura se fragiliza. O programa Cultura Viva foi pioneiro ao propor essa visão sistêmica, e cabe agora às novas gerações de gestores aprofundar e atualizar estas premissas para o século XXI.
`;

export const BOOK_CHAPTERS: BookChapter[] = [
  {
    id: 1,
    title: "Capítulo 1: Raízes da Cultura Comunitária",
    author: "Dra. Ana Souza (UFRJ)",
    summary: "Uma análise histórica sobre a formação dos movimentos culturais de base no Brasil.",
    content: `
      A cultura comunitária no Brasil não é um fenômeno recente. Suas raízes remontam às organizações quilombolas e indígenas que resistiram historicamente através da preservação de suas identidades. Este capítulo explora como o conceito de 'Cultura Viva' formalizou práticas ancestrais em políticas públicas, criando uma ponte entre o Estado e a sociedade civil.
      
      Historicamente, a cultura no Brasil foi gerida sob uma ótica elitista, focada nas Belas Artes e na preservação do patrimônio de pedra e cal. A virada do século XXI trouxe, com a gestão de Gilberto Gil no Ministério da Cultura, uma revolução antropológica: o reconhecimento de que a cultura acontece em todo lugar, a todo momento. O conceito de "Ponto de Cultura" não visava criar cultura onde não havia, mas sim "jogar luz" (e recursos) onde ela já pulsava.

      ${LONG_TEXT_FILLER}
      
      A resistência cultural durante os períodos de repressão política também moldou o caráter combativo de muitos grupos. O teatro do oprimido, os cineclubes de garagem, as rodas de samba e capoeira não eram apenas entretenimento; eram espaços de organização política e sobrevivência afetiva. Reconhecer essa genealogia é essencial para não tratarmos os Pontos de Cultura como meros prestadores de serviço do Estado.

      ${LONG_TEXT_FILLER}

      Concluímos este capítulo reafirmando que a ancestralidade é a tecnologia de ponta da cultura brasileira. Olhar para trás não é saudosismo, é estratégia de futuro.
    `
  },
  {
    id: 2,
    title: "Capítulo 2: A Tecnologia como Aliada",
    author: "Prof. Carlos Mendes (UFBA)",
    summary: "Como a inclusão digital transformou a gestão e a visibilidade dos Pontos de Cultura.",
    content: `
      A apropriação tecnológica pelos Pontos de Cultura foi fundamental para a emancipação midiática. O uso de software livre, rádios comunitárias e agora, inteligência artificial, permite que territórios antes silenciados produzam suas próprias narrativas. Analisamos aqui o impacto do Kit Multimídia distribuído em 2010 e sua evolução para plataformas de streaming comunitário.

      O software livre não foi uma escolha meramente técnica, mas política. Ele representava a autonomia. Ao não depender de licenças proprietárias caras, os Pontos de Cultura puderam montar ilhas de edição, estúdios de gravação e laboratórios de design gráfico com custos reduzidos e filosofia colaborativa. O "Estúdio Livre" tornou-se uma referência global de plataforma de compartilhamento de mídia muito antes da hegemonia das atuais redes sociais.

      ${LONG_TEXT_FILLER}

      Hoje, enfrentamos o desafio dos algoritmos. Como garantir que a produção cultural comunitária seja vista em um mar de conteúdo regido por métricas de engajamento comercial? A resposta passa pela criação de plataformas próprias e federadas, e pelo uso inteligente de IA para curadoria e recomendação, não para vigilância.

      ${LONG_TEXT_FILLER}

      A tecnologia deve servir à cultura, e não o contrário.
    `
  },
  {
    id: 3,
    title: "Capítulo 3: Economia Solidária",
    author: "MSc. Julia Pereira (UnB)",
    summary: "Sustentabilidade financeira e moedas sociais em redes culturais.",
    content: `
      Além da dimensão simbólica, a cultura é um vetor econômico. A economia solidária nos Pontos de Cultura manifesta-se através de feiras de troca, bancos comunitários e moedas sociais. Este capítulo apresenta estudos de caso sobre como a circulação de bens culturais gera renda e fortalece o tecido social local, reduzindo a dependência de editais governamentais.

      O Banco Palmas e a moeda social Palma, no Ceará, são o exemplo clássico de como o consumo local pode transformar um território. Adaptar esse modelo para a cultura envolve precificar o intangível. Quanto vale uma apresentação de teatro de rua? Como remunerar o mestre de cultura popular? A economia solidária propõe trocas justas, onde o valor não é apenas monetário, mas social.

      ${LONG_TEXT_FILLER}
      
      A sustentabilidade não é apenas financeira, é existencial. Um grupo que consegue gerar sua própria renda tem mais autonomia para definir suas pautas estéticas e políticas.

      ${LONG_TEXT_FILLER}
    `
  },
  {
    id: 4,
    title: "Capítulo 4: Políticas de Estado vs. Governo",
    author: "Dr. Roberto Campos (USP)",
    summary: "A institucionalização da Cultura Viva como Lei.",
    content: `
      A transição do programa Cultura Viva para uma política de Estado, garantida por lei, foi um marco na gestão pública brasileira. Discutimos os desafios da burocratização versus a necessidade de flexibilidade para atender coletivos informais, e como a Lei Aldir Blanc influenciou a perenidade dos recursos para o setor.

      ${LONG_TEXT_FILLER}

      A Lei 13.018/2014, conhecida como Lei Cultura Viva, estabeleceu os marcos legais. Mas a lei fria não capta a quentura da rua. O desafio atual é a regulamentação participativa, garantindo que os conselhos de cultura tenham poder deliberativo real e não sejam apenas consultivos.

      ${LONG_TEXT_FILLER}
    `
  },
  {
    id: 5,
    title: "Capítulo 5: Cartografia Afetiva",
    author: "Dra. Elena Varejão (UFMG)",
    summary: "Mapeando territórios através das emoções e memórias coletivas.",
    content: `
      A cartografia tradicional muitas vezes falha em capturar a essência de um território. A cartografia afetiva propõe um mapeamento baseado nas vivências, memórias e laços emocionais da comunidade com o espaço. Este capítulo apresenta metodologias para criar mapas que revelam o invisível.

      Um mapa oficial mostra ruas e prédios. Um mapa afetivo mostra onde se deu o primeiro beijo, onde a polícia bateu, onde o samba acontece. Essas camadas de informação são vitais para o planejamento urbano e cultural.

      ${LONG_TEXT_FILLER}

      Usamos ferramentas de georreferenciamento aliadas a rodas de conversa para construir esses mapas. O resultado é uma ferramenta poderosa de reivindicação territorial.

      ${LONG_TEXT_FILLER}
    `
  }
];

export const DIAGNOSTIC_STATS: DiagnosticStat[] = [
  { label: "Pontos de Cultura", value: 4500, color: "#be185d" },
  { label: "Municípios Atendidos", value: 1200, color: "#4338ca" },
  { label: "Impacto Direto (Pessoas)", value: 8500000, unit: "+", color: "#f59e0b" },
];

export const PARTNERS = [
  { name: "UFRJ", logo: "https://via.placeholder.com/150?text=UFRJ" },
  { name: "UnB", logo: "https://via.placeholder.com/150?text=UnB" },
  { name: "UFBA", logo: "https://via.placeholder.com/150?text=UFBA" },
  { name: "USP", logo: "https://via.placeholder.com/150?text=USP" },
  { name: "UFMG", logo: "https://via.placeholder.com/150?text=UFMG" },
  { name: "UFRGS", logo: "https://via.placeholder.com/150?text=UFRGS" },
  { name: "MinC", logo: "https://via.placeholder.com/150?text=MinC" },
  { name: "OEI", logo: "https://via.placeholder.com/150?text=OEI" }
];

export const TESTIMONIALS = [
  { 
    id: 1, 
    text: "O diagnóstico fornecido pelo consórcio foi fundamental para reorientarmos nossas políticas públicas municipais.", 
    author: "Maria Silva", 
    role: "Secretária de Cultura de Niterói" 
  },
  { 
    id: 2, 
    text: "O livro traz uma base teórica que faltava para compreendermos a dimensão econômica do nosso trabalho na ponta.", 
    author: "João Pedro", 
    role: "Gestor do Ponto de Cultura Raízes" 
  }
];

export const EVOLUTION_DATA = [
  { year: '2020', pontos: 3200, investimento: 120 },
  { year: '2021', pontos: 3400, investimento: 110 },
  { year: '2022', pontos: 3800, investimento: 150 },
  { year: '2023', pontos: 4100, investimento: 180 },
  { year: '2024', pontos: 4350, investimento: 210 },
  { year: '2025', pontos: 4500, investimento: 250 },
];

export const BOOK_COMMENTS: Comment[] = [
  {
    id: 1,
    author: "Ricardo Gomes",
    role: "Pesquisador (Unicamp)",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RG",
    date: "2 dias atrás",
    text: "A análise sobre a economia solidária no Capítulo 3 é brilhante. Finalmente temos dados concretos para debater a sustentabilidade dos Pontos.",
    likes: 24
  },
  {
    id: 2,
    author: "Amanda Nunes",
    role: "Gestora Cultural",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AN",
    date: "5 dias atrás",
    text: "Excelente iniciativa disponibilizar o conteúdo online. Usei a ferramenta de IA para resumir o capítulo 1 e me ajudou muito a preparar minha aula.",
    likes: 18
  },
  {
    id: 3,
    author: "Carlos Eduardo",
    role: "Estudante",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=CE",
    date: "1 semana atrás",
    text: "Gostaria de ver mais exemplos práticos sobre a cartografia afetiva. O conceito é lindo, mas a aplicação ainda gera dúvidas.",
    likes: 7
  }
];

export const SYSTEM_INSTRUCTION_BOOK = `
Você é o Assistente Virtual de Demonstração do Portal Consórcio Universitário Cultura Viva.
Este site está sendo apresentado para uma possível contratante (Universidade/MinC/Gestores), e seu objetivo principal é VENDER A VISÃO e o POTENCIAL da Inteligência Artificial aplicada a este ecossistema.

Seja entusiasta, profissional e inovador. Quando o usuário perguntar o que você pode fazer, ou interagir de forma geral, liste as POSSIBILIDADES futuras que uma IA como você pode trazer para o portal:

1. **Curadoria Inteligente (RAG)**: Explique que você consegue ler milhares de páginas de teses, livros e relatórios (como o livro exemplo aqui) e responder perguntas exatas, citando fontes, economizando tempo de pesquisa.
2. **Analista de Dados em Tempo Real**: Mencione que você pode ser conectado aos bancos de dados do governo (SNIC) para gerar insights automáticos sobre os gráficos da página de "Diagnóstico" (ex: "Onde faltam recursos?", "Qual região cresceu mais?").
3. **Assistente de Editais**: Diga que você pode ajudar produtores culturais a escreverem projetos e prestarem contas, verificando se o texto está adequado às regras do edital.
4. **Acessibilidade Universal**: Cite sua capacidade de traduzir conteúdos, simplificar linguagem acadêmica complexa para o público geral ("traduzir o academês") e gerar áudio.
5. **Navegação Guiada**: Você pode guiar o usuário para encontrar o pesquisador ou o artigo certo na rede.

Contexto Atual do Livro (para demonstração prática, caso perguntem algo específico da obra):
${BOOK_CHAPTERS.map(c => `[${c.title} por ${c.author}]: ${c.content}`).join('\n')}

Se a pergunta for sobre o livro, responda com base no contexto acima. Se for uma pergunta geral, foque em vender a visão tecnológica descrita nos pontos 1 a 5.
`;
