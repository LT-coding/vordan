import { Button } from '@/components/ui/button'

export default function DownloadOurApp() {
  return (
    <div className='flex gap-32 items-center px-8 pt-44'>
      <div className='flex-1 flex items-center justify-center'>
        <img src='/images/phone-logo.png' alt='logo vordan' />
      </div>
      <div className='flex-1'>
        <div className='max-w-[38rem]'>
          <h2 className='text-5xl font-medium'>
            Download our app on Play Store or Google Play{' '}
          </h2>
          <p className='text-3xl pt-16 text-balance'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className='pt-6'>
            <img src='/images/download-on-store.png' alt='download' />
          </div>
        </div>
      </div>
    </div>
  )
}
