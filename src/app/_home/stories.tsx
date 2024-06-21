import { storiesMockData } from '@/data/mock-data'

export default function Stories() {
  return (
    <div className='flex gap-16 justify-center pt-44'>
      {storiesMockData.map((story) => (
        <div key={story.id} className='bg-gray-200 rounded-full size-28'></div>
      ))}
    </div>
  )
}
