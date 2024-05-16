import { config } from '@/constants/url';
import { CartItem, ShoppingCart } from '@/types/cart';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

interface ShoppingCartStore extends ShoppingCart {
  getAllItems: () => void;
}

const getAllItem = async () => {
  try {
    const response = await fetch(config.BASE_URL + config.endpoints.cart);
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const useCart = create<ShoppingCartStore>((set) => ({
  items: [],
  getAllItems: async () => {
    try {
      const res = await fetch(config.BASE_URL + config.endpoints.cart);
      const data = await res.json();
      console.log(data);
      set({ items: data });
    } catch (error) {
      console.log('error');
    }
  },
  addItem: async (product, quantity) => {
    try {
      const res = await fetch(config.BASE_URL + config.endpoints.cart, {
        method: 'POST',
        body: JSON.stringify({
          productId: product.id,
          quantity,
        }),
      });
      const data = (await res.json()) as CartItem;
      set((state) => ({ items: [...state.items, data] }));
    } catch (error) {
      console.log(error);
    }
  },
  removeItem(productId) {},
  updateItemQuantity: (productId, quantity) =>
    set((state) => {
      const cartItem = state.items.find((item) => item.productId === productId);

      if (!cartItem) {
        return state;
      }

      const updateCartItem = async () => {
        try {
          const res = await fetch(
            config.BASE_URL + config.endpoints.cart + `/${cartItem.id}`,
            {
              method: 'PATCH',
              body: JSON.stringify({ quantity: cartItem.quantity + 100 }),
            }
          );
          const updatedCartItems = state.items.map((item) =>
            item.id === cartItem.id
              ? { ...item, quantity: item.quantity + 100 }
              : item
          );
          set({ items: updatedCartItems });
        } catch (error) {
          console.log(error);
        }
      };

      updateCartItem();

      return state;
    }),
  getTotalPrice: () => {
    return 0;
  },
}));
