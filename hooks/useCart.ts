import { CartItem, ShoppingCart } from '@/types/cart';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';

export const useCart = (): ShoppingCart => {
  const [items, setItems] = useState<CartItem[]>([]);

  const getAllItems = async () => {
    const response = await fetch('http://localhost:8080/cart');
    const data = await response.json();
    setItems(data);
  };
  useEffect(() => {
    getAllItems();
  }, []);

  const addItem = async (product: Product, quantity: number) => {
    const response = await fetch('http://localhost:8080/cart', {
      method: 'POST',
      body: JSON.stringify({
        productId: product.id,
        quantity: product.weight,
      }),
    });
    const data = await response.json();
    setItems((prev) => [...prev, data]);
  };
  const removeItem = () => {};
  const updateItemQuantity = (productId: number, quantity: number) => {};
  const getTotalPrice = () => {
    return 0;
  };

  return { items, addItem, removeItem, updateItemQuantity, getTotalPrice };
};
