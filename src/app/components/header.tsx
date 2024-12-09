import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Equal, Search } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  return (
    <div className="bg-blue-800">
    <header className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
  
        <div className="text-black text-3xl font-bold tracking-wider">
          Avion
        </div>
         <div className="flex items-center ">
         <Search className="w-8 h-6
          text-gray-500"/>
            
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>

            </button>

            <div className="md:hidden z-10">
              <Sheet>
                <SheetTrigger>
                <Equal />
                </SheetTrigger>
                </Sheet>
               </div>
               <ul className='flex gap-3 mr-4 cursor-pointer'>
               <Button variant={"outline"} size={"sm"}>
                Home
              </Button>
             <h1> <Link href={'/about'} className= "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80">About</Link>
             </h1>
              </ul>
               </div>
         </div>
      </header>
      </div>
  );
};

export default Header;