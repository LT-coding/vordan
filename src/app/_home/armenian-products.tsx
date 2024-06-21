import ProductCard from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { armenianProductsMockData } from '@/data/mock-data'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function ArmenianProducts() {
  return (
    <section className='relative mt-44 mx-8'>
      <div className='absolute top-0 left-0 h-[634px] w-full -z-10'>
        <img src='/images/armenian-products/main.png' alt='Armenian products' />
      </div>

      <div className='flex items-center justify-center pt-[436px]'>
        <div className='flex-1 pt-16 ps-8'>
          <Button variant='ghost' className='size-20'>
            <ArrowLeft size={46} />
          </Button>
        </div>
        <div className='flex gap-12 justify-center'>
          {armenianProductsMockData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex-1 flex justify-end pt-16 pe-8'>
          <Button variant='ghost' className='size-20'>
            <ArrowRight size={46} />
          </Button>
        </div>
      </div>
    </section>
  )
}
