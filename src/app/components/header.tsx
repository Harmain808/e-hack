import Link from "next/link";
import { Equal, Search } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  return (
    <>
      <header className="max-w-[1440px] mx-auto md:h-[132px] h-[69px] justify-center  flex flex-col items-center FFFFFF md:px-10 px-5 lg:w-full md:mb-12">
        <div className="md:border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
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

          <h1 className="text-[#22202E] text-2xl font-semibold clashDisplay">
            <Link href="/">Avion</Link>
          </h1>
            <div className="md:hidden z-10">
              <Sheet>
                <SheetTrigger>
                <Equal />
                </SheetTrigger>
                <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-4xl font-bold clashDisplay mb-4 text-center">
                  <Link href="/">Avion</Link>
                    </SheetTitle>
                    <SheetDescription>
                      <nav className="flex flex-col text-sm gap-y-3 border-[0.5px] items-center p-4 rounded-md">
                        <Link
                          href="/products"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          All Products
                        </Link>
                        <Link
                          href="/#ceramic"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Ceramics
                        </Link>
                        <Link
                          href="/Tables"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Tables
                        </Link>
                        <Link
                          href="/"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Chairs
                        </Link>
                        <Link
                          href="/Chairs"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Crockery
                        </Link>
                        <Link
                          href="/Crockery"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Tableware
                        </Link>
                        <Link
                          href="/Tableware"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Cutlery
                        </Link>
                      </nav>
                      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
            </div>
          </div>
        </div>

        <nav className="w-[675px] justify-between items-center h-1/2 text-[#726E8D] text-[16px] satoshi pt-10 hidden md:flex">
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
        Home
          </Link>
          <Link
            href="/products"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
        All Products
          </Link>
          <Link
            href="/#ceramic"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Ceramics
          </Link>
          <Link
            href="/Tables"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Tables
          </Link>
          <Link
            href="/chairs"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Chairs
          </Link>
          <Link
            href="/crockery"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Crockery
          </Link>
          <Link
            href="/tableware"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Tableware
          </Link>
          <Link
            href="/cutlery"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Cutlery
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;