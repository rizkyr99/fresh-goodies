import { ShoppingCart } from '@/types/cart';
import React from 'react';

const Cart = ({ items }: ShoppingCart) => {
  return (
    <div
      className={`fixed bottom-0 max-md:left-0 md:right-0 md:top-0 z-50 h-36 md:h-screen w-full md:w-80 bg-white px-4 pt-10 ${
        items.length > 0 ? '' : 'max-md:hidden'
      }`}>
      <button className='flex justify-between items-center bg-black w-full rounded-full px-6 py-3 text-white'>
        <div>Cart</div>
        <div>$27.3</div>
      </button>
    </div>
  );
};

export default Cart;
