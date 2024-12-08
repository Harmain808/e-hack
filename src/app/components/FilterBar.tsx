import { ChevronDown } from 'lucide-react';
import Image from "next/image";
import Footer from './footer';
import Header from './header';

const FilterBar = () => {
  return (
    <main>
      <Header />

   <Image className="hidden md:block" src="/Frame 143.svg" height={209} width={1480} alt="frame"/>
   <Image className="md:hidden w-full" src="/f.svg" height={146} width={400}  alt="Header"/>

    <div className="max-w-[1280px] mx-auto flex md:flex-row justify-between items-center bg-white p-4 border-b">
      <ul className="text-[16px]  flex-wrap md:flex-nowrap w-full md:w-[557px] h-12 justify-around items-center gap-4 hidden md:flex cursor-pointer">
        <li className="flex items-center gap-1 cursor-pointer">
          <span className="flex items-center gap-1">Category <ChevronDown /></span>
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <span className="flex items-center gap-1">Product <ChevronDown /></span>
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <span className="flex items-center gap-1">Price <ChevronDown /></span>
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <span className="flex items-center gap-1">Brand <ChevronDown /></span>
        </li>
      </ul>

      <li className="flex items-center gap-1 cursor-pointer md:hidden">
          <span className="flex items-center gap-1">Filters <ChevronDown /></span>
        </li>

     

      <ul className="w-full md:w-[237px] text-[16px] h-12 justify-between md:justify-around items-center mt-4 md:mt-0 hidden md:flex">
        <li className="flex items-center">Sorting by:</li>
        <li className="w-[154px] flex items-center justify-center gap-1 cursor-pointer">
          <span className="flex items-center gap-1">Date added <ChevronDown /></span>

        </li>
      </ul>
   <span className="flex items-center gap-1 md:hidden">Sorting by<ChevronDown /></span>
      
    </div>
    <Footer />
    </main>
  );
};

export default FilterBar;
