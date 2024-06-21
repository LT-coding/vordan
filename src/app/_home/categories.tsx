import { categoriesMockData } from '@/data/mock-data'
import Image from 'next/image'
import { Button } from '../../components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Categories() {
  return (
    <section className='flex flex-col gap-11 pt-44 px-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-5xl font-bold'>Կատեգորիաներ</h2>
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
        {categoriesMockData.map((category) => (
          <Link href='/' key={category.id}>
            <img
              src={category.imageUrl}
              alt={category.title}
              width={292}
              height={180}
              className='object-cover'
            />
            <h3 className='text-xl font-bold p-4'>{category.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
