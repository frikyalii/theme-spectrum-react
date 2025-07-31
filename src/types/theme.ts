export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface ThemeConfig {
  id: ThemeType;
  name: string;
  description: string;
  layout: 'default' | 'sidebar' | 'grid';
  fontFamily: string;
}

export const THEMES: Record<ThemeType, ThemeConfig> = {
  theme1: {
    id: 'theme1',
    name: 'Minimalist',
    description: 'Clean, light, professional design',
    layout: 'default',
    fontFamily: 'Inter'
  },
  theme2: {
    id: 'theme2',
    name: 'Dark Professional',
    description: 'Sophisticated dark theme with sidebar layout',
    layout: 'sidebar',
    fontFamily: 'Playfair Display'
  },
  theme3: {
    id: 'theme3',
    name: 'Colorful Playful',
    description: 'Vibrant, fun design with card-based layout',
    layout: 'grid',
    fontFamily: 'Pacifico'
  }
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}