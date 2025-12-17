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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
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