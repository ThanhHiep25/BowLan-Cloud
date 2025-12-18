export enum ProductType {
  ANTI_DDOS = 'Anti-DDoS',
  CLOUD_SERVER = 'Cloud Server',
  DEDICATED = 'Máy chủ vật lý',
  PROXY = 'Proxy Server',
  
}

export interface ProductPlan {
  id: string;
  name: string;
  price: string;
  cpu: string;
  ram: string;
  disk: string;
  bandwidth: string;
  type: ProductType;
  features: string[];
  popular?: boolean;
}

// Content block types for blog posts
export type ContentBlockType = 'heading2' | 'heading3' | 'paragraph' | 'list' | 'code' | 'blockquote';

export interface ContentBlock {
  type: ContentBlockType;
  content?: string;
  items?: string[]; // for lists
  language?: string; // for code blocks
  title?: string; // for headings
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  content: ContentBlock[];
}

export interface PartnerBenefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLinkItem {
  name: string;
  path: string;
  children?: NavLinkItem[];
}