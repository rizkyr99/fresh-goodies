'use client';

import Card from '@/components/Card';
import Cart from '@/components/Cart';
import { useCart } from '@/hooks/useCart';
import { useProduct } from '@/hooks/useProduct';
import { useEffect } from 'react';

export default function Home() {
  const { products } = useProduct();
  const items = useCart((state) => state.items);
  const getAllItems = useCart((state) => state.getAllItems);

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <main className='mt-24 max-w-screen-xl mx-auto'>
      <div className='flex w-full overflow-x-auto items-center gap-6 px-4'>
        <div className='p-2 text-lg border-b border-black'>All</div>
        <div className='p-2 text-lg border-b border-transparent'>Spicy</div>
        <div className='p-2 text-lg border-b border-transparent'>Dressings</div>
        <div className='p-2 text-lg border-b border-transparent'>Sweet</div>
        <div className='p-2 text-lg border-b border-transparent'>Roots</div>
      </div>
      <div className='md:mr-80'>
        <div className='px-4 pt-5 pb-40 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}

              // id={product.id}
              // name={product.name}
              // imageUrl={product.imageUrl}
              // price={product.price}
            />
          ))}
        </div>
        <Cart
          items={items}
          addItem={() => {}}
          removeItem={() => {}}
          updateItemQuantity={() => {}}
          getTotalPrice={() => 10}
        />
      </div>
    </main>
  );
}
