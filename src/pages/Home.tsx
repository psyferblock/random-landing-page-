import ClientReviews from '@/components/ClientReviews'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PackagesAmenetiesPrograms from '@/components/PackagesAmenetiesPrograms'
import Testimonials from '@/components/Testimonials'
import RootLayout from './layout'

export default function App(){
  return (
    <>

  <div>
  {/* <Navbar/> */}
  <hr className="mx-auto bg-black dark:bg-white w-1/2" />
  <div className="relative ">

     <Hero/>
  <hr className="mx-auto bg-black dark:bg-white w-1/2" />
  </div>
<PackagesAmenetiesPrograms/>
{"testimonials" }
<Testimonials /> 

  </div>
    </>
  )
}
