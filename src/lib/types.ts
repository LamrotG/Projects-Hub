export interface ProjectMeta {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  status: string;
  year: number;
  featured: boolean;
  stack: string[];
  github: string;
  live: string;
  cover: string;
  gallery?: string[];
  role?: string;
  category?: string;
  highlights?: string[];
}
