import { Product } from '@/types/product';
import { useEffect, useState } from 'react';

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch('http://localhost:8080/products');
      const data = await response.json();
      setProducts(data);
    };
    getAllProducts();
  }, []);

  return { products };
};
