import Image from 'next/image';
import plus from '@/assets/add product.svg';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types/product';

interface CardProps {
  //   id: number;
  //   name: string;
  //   price: number;
  //   imageUrl: string;
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const { name, price, imageUrl, weight } = product;
  const { items, addItem, updateItemQuantity } = useCart();

  const cartData = items.find((item) => item.productId === product.id);

  const handleClick = () => {
    if (cartData) {
      updateItemQuantity(product.id, 100);
    } else {
      addItem(product, product.weight);
    }
  };

  return (
    <div className='bg-neutral-100 p-3 rounded-xl flex flex-col'>
      <Image
        src={imageUrl}
        width={145}
        height={113}
        alt={name}
        className='mix-blend-darken w-full flex-1 object-cover'
      />
      <div className='text-2xl font-semibold'>
        ${((cartData?.quantity || weight) * price).toFixed(2)}
      </div>
      <div className='mb-3'>{name}</div>
      <div className='flex items-center justify-between'>
        <button
          onClick={handleClick}
          className={`group h-10 w-10 rounded-full ${
            cartData ? 'flex' : 'hidden'
          } items-center justify-center bg-black border border-black/5 hover:bg-black transition`}>
          <Image
            src={plus}
            width={24}
            height={24}
            alt='add product'
            className='invert'
          />
        </button>
        <div className='text-black/30'>
          {(cartData?.quantity || weight) / 1000} kg
        </div>
        <button
          onClick={handleClick}
          className={`${
            cartData ? 'bg-black' : 'bg-transparent'
          } group h-10 w-10 rounded-full flex items-center justify-center border border-black/5 hover:bg-black transition`}>
          <Image
            src={plus}
            width={24}
            height={24}
            alt='add product'
            className={`${cartData ? 'invert' : 'group-hover:invert'}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
