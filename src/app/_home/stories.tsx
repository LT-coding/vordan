import { storiesMockData } from '@/data/mock-data'

export default function Stories() {
  return (
    <div className='flex gap-16 justify-center pt-28'>
      {storiesMockData.map((story) => (
        <img
          key={story.id}
          src={story.imageUrl}
          alt='story'
          className='bg-gray-200 rounded-full size-28 object-cover'
        />
      ))}
    </div>
  )
}
