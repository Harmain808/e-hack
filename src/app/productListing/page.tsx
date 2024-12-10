import React from "react";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";

const Products = () => {
  return (
    <main>
      <Header />


    <div className="container mx-auto px-2 py-4 flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Image src={'/1.svg'} width={30} height={30} alt='right' />
      <Image src={'/2.svg'} width={30} height={30} alt='right' />
      <Image src={'/3.svg'} width={30} height={30} alt='right' />
      <Image src={'/8.svg'} width={30} height={30} alt='right' />
      <Image src={'/4.svg'} width={30} height={30} alt='right' />
      <Image src={'/5.svg'} width={30} height={30} alt='right' />
      <Image src={'/6.svg'} width={30} height={30} alt='right' />
      <Image src={'/7.svg'} width={30} height={30} alt='right' />
      <Image src={'/1.svg'} width={30} height={30} alt='right' />
      <Image src={'/2.svg'} width={30} height={30} alt='right' />
      <Image src={'/3.svg'} width={30} height={30} alt='right' />
      <Image src={'/8.svg'} width={30} height={30} alt='right' />
      </div>
      <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[30] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] my-8">
        View collection
      </button>
    </div>
    <Footer />
    </main>
  );
};

export default Products;
