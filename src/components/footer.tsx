import { footerMockData } from '@/data/mock-data'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-stone-100 mt-32'>
      <div className='flex justify-center p-28 gap-20'>
        {footerMockData.map((item, index) => (
          <div key={index} className='flex flex-col gap-4 max-w-[26rem]'>
            <div className='text-2xl font-bold'>{item.item}</div>
            <div className='flex flex-col gap-4'>
              {item.subItems.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.link}
                  className='text-lg hover:bg-gray-200 px-2 rounded-sm transition-colors'
                >
                  {subItem.item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}
