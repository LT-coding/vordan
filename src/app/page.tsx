import Header from '@/components/header'
import Hero from '@/app/_home/hero'
import Stories from '@/app/_home/stories'
import Categories from './_home/categories'
import ArmenianProducts from './_home/armenian-products'
import News from './_home/news'
import Recommendations from './_home/recommendations'
import Discounts from './_home/discounts'
import CoWorkers from './_home/co-workers'
import Brands from './_home/brands'
import DownloadOurApp from './_home/download-our-app'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stories />
      <Categories />
      <ArmenianProducts />
      <News />
      <div className='h-[430px] bg-[#0743a3] text-9xl text-background font-bold flex items-center mx-8 justify-center mt-44'>
        Outlet
      </div>
      <Recommendations />
      <Discounts />
      <CoWorkers />
      <Brands />
      <div className='h-[430px] mt-44 flex px-8'>
        <div className='flex-1'>
          <img src='/images/no-name/1.png' alt='no-name' />
        </div>
        <div className='flex-1'>
          <img src='/images/no-name/2.png' alt='no-name' />
        </div>
      </div>
      <DownloadOurApp />
      <Footer />
    </div>
  )
}
