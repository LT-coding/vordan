import { StarRating } from './ui/star-rating'
import { Button } from './ui/button'
import { MdAddShoppingCart } from 'react-icons/md'
import { Heart } from 'lucide-react'
import Link from 'next/link'

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link
      href='/'
      className='bg-background px-5 py-6 pb-1 z-10 border-2 rounded-sm flex flex-col items-center gap-2 border-gray-700 hover:-translate-y-2 hover:shadow-lg transition duration-300'
    >
      <div className='relative w-[242px] h-[338px] flex items-center'>
        <img
          src={product.imageUrl}
          alt={product.title}
          className='object-contain'
        />
      </div>
      <div className='text-[1.375rem] font-bold'>{product.price} AMD</div>
      <div className='text-xl'>{product.title} </div>
      <div>
        <StarRating rating={0} readOnly={true} />
      </div>
      <div className='flex gap-12 pt-1 text-muted-foreground'>
        <Button variant='ghost' className='text-5xl size-14 p-2'>
          <MdAddShoppingCart />
        </Button>
        <Button variant='ghost' className='size-14 p-2'>
          <Heart size={46} />
        </Button>
      </div>
    </Link>
  )
}
