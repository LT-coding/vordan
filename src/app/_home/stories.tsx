import { storiesMockData } from '@/data/mock-data'

export default function Stories() {
  return (
    <div className='flex gap-16 justify-center pt-28'>
      {storiesMockData.map((story) => (
        <div key={story.id} className='flex flex-col gap-2 items-center'>
          <img
            src={story.imageUrl}
            alt='story'
            className='bg-gray-200 rounded-full size-28 object-cover'
          />
          <div className='text-xl'>{story.title}</div>
        </div>
      ))}
    </div>
  )
}
