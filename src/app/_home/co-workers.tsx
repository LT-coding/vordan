import { Button } from '@/components/ui/button'
import { coWorkersMockData } from '@/data/mock-data'
import { ArrowRight } from 'lucide-react'

export default function CoWorkers() {
  return (
    <section className='flex gap-24 px-8 pt-44'>
      <div className='flex gap-12 flex-col items-start flex-[1.2] pt-12'>
        <h2 className='text-7xl'>Գործընկերներ</h2>
        <h3 className='text-5xl pt-2'>Ցանկանու՞մ եք դառնալ գործընկեր</h3>
        <p className='text-3xl'>
          Ձեր ապրանքանիշի առաջխաղացումը <br />
          <span className='text-primary font-bold'>Որդանի</span> առաքելությունն
          է
        </p>
        <Button className='text-2xl h-24 px-10 mt-6'>Դառնալ գործընկեր</Button>
      </div>
      <div className='grid grid-cols-2 flex-1'>
        {coWorkersMockData.map((item) => (
          <div
            key={item.id}
            className='flex items-start justify-end gap-4 border border-gray-400 flex-col p-4'
          >
            <Button
              variant='ghost'
              className='size-12 self-end -rotate-45 p-0 text-muted-foreground'
            >
              <ArrowRight size={46} strokeWidth='1.2' />
            </Button>
            <img
              src={item.imageUrl}
              alt={item.title}
              className='w-36 h-24 object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
