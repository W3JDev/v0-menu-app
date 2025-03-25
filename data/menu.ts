import menuJson from './menu.json';

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  ingredients: string[];
  allergens?: string[];
  dietaryInfo?: string[];
  popular?: boolean;
  featured?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
  weekend?: boolean;
}

export interface MenuData {
  categories: Category[];
  items: MenuItem[];
}

export const menuData: MenuData = menuJson as MenuData;