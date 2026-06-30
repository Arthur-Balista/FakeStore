export interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Categoria;
}

export interface Categoria {
  id: number;
  name: string;
  image: string;
}