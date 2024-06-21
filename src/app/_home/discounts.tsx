import { Button } from '@/components/ui/button'
import { discountsMockData } from '@/data/mock-data'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Discounts() {
  return (
    <section className='flex flex-col gap-11 pt-44 px-8'>
      <div className='flex justify-center items-center relative pb-8'>
        <h2 className='text-5xl font-bold'>Զեղչեր</h2>
        <div className='flex gap-16 absolute end-0 top-0'>
          <Button variant='ghost' className='size-20'>
            <ArrowLeft size={46} />
          </Button>
          <Button variant='ghost' className='size-20'>
            <ArrowRight size={46} />
          </Button>
        </div>
      </div>
      <div className='flex gap-5 justify-center'>
        {discountsMockData.map((item) => (
          <div
            key={item.id}
            className='w-full flex items-end relative flex-col'
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className='object-contain h-full'
            />
            <div className='font-bold'>մինչև {item.timeLeft}</div>
            <h3 className='absolute bottom-0 start-8 z-10 text-6xl font-bold'>
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      <Button variant='ghost' className='text-2xl place-self-end'>
        Տեսնել բոլորը
      </Button>
    </section>
  )
}
