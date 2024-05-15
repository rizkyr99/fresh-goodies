'use client';

import React, { useState } from 'react';
import filter from '@/assets/Filter.svg';
import search from '@/assets/Search.svg';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed z-50 top-0 left-0 w-full bg-white h-24 p-4 flex items-end justify-between'>
      <h1 className='text-xl font-semibold'>Vegetables</h1>
      <div className='flex gap-7 relative'>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src={filter} width={24} height={24} alt='filter' />
        </button>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src={search} width={24} height={24} alt='filter' />
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-full right-2 px-6 py-5 bg-white rounded-2xl w-64 shadow`}>
        <input
          type='text'
          placeholder='Search...'
          className='font-bold px-3 py-2 w-full rounded-full border-2 border-black'
        />
        <div className='bg-neutral-100 p-2'>
          <div>Category</div>
          <div>Price</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
