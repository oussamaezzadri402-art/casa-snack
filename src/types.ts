export type Category = 'all' | 'burger' | 'pizza' | 'tacos' | 'panini' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  nameFr?: string;
  category: Category;
  price: number; // in DH
  description: string;
  image: string;
  popular?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
  ingredients?: string[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  sauce?: string;
  notes?: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
