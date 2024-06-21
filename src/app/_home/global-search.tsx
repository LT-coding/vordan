import React from 'react'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function GlobalSearch() {
  return (
    <div className='relative w-full max-w-[64rem]'>
      <Input
        className='pr-10 h-12'
        placeholder='I am looking for...'
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     handleSearch()
        //   }
        // }}
      />
      <Button
        // variant='pr'
        // size='iconSm'
        className='absolute right-0 top-1/2 h-full -translate-y-1/2 w-20'
        // onClick={handleSearch}
      >
        <Search />
      </Button>
    </div>
  )
}
