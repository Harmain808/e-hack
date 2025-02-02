'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

const Product = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/productlisting');
  };

  return (
    <>
      <section>
        <div className='px-8 py-12 text-black mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>

          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
          
            <div className='w-full md:w-[700px] h-auto group'>
              <Image
                src={'/c.svg'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-black'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/chair.svg'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-black'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/ch.svg'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-black'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          <div className='my-10 flex justify-center items-center'>
            <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-black' onClick={handleNavigation}>
              View products
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product;
