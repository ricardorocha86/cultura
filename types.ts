
export interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  cta: string;
}

export interface BookChapter {
  id: number;
  title: string;
  author: string;
  summary: string;
  content: string; // Plain text content for RAG/Indexing
}

export interface DiagnosticStat {
  label: string;
  value: number;
  unit?: string;
  color: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Comment {
  id: number;
  author: string;
  role: string;
  avatar: string;
  date: string;
  text: string;
  likes: number;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}
