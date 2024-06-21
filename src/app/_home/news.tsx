import ProductCard from '@/components/product-card'
import { newsMockData } from '@/data/mock-data'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/button'

export default function News() {
  return (
    <section className='flex flex-col gap-11 pt-44 px-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-5xl font-bold'>Նորույթներ</h2>
        <div className='flex gap-16'>
          <Button variant='ghost' className='size-20'>
            <ArrowLeft size={46} />
          </Button>
          <Button variant='ghost' className='size-20'>
            <ArrowRight size={46} />
          </Button>
        </div>
      </div>
      <div className='flex gap-5 justify-center'>
        {newsMockData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Button variant='ghost' className='text-2xl place-self-end'>
        Ավելին
      </Button>
    </section>
  )
}
