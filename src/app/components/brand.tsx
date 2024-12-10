import React from 'react';
import Image from 'next/image';

const Brand = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-8 py-12 text-black mt-12">
    
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>
          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <Image src={'/d.svg'} alt={'d'} width={24} height={24} />
              <p className="py-4 font-semibold">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <Image
                src={'/d1.svg'}
                height={700}
                width={700}
                alt="d1"
                />
              <p className="py-4 font-semibold">Made by true artisans</p>
              <p>Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <Image src={'/d3.svg'} alt={'d3'} width={24} height={24} />
              <p className="py-4 font-semibold">Unbeatable prices</p>
              <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <Image src={'/d4.svg'} alt={'d'} width={24} height={24} />
              <p className="py-4 font-semibold">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
