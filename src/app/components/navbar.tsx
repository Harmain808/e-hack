import Link from "next/link";

function navbar (){
    return(
<div className="w-full border-b-[1px] border-black px-[135px] pt-[40px] pb-[16px]">
        <div className="container h-[38px] mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-8">
         <nav className="hidden md:flex items-center gap-12">
         <Link href="./productListing" className="text-[16px] leading-[24px] hover:text-gray-600">All Product</Link>
         <Link href="./login" className="text-[16px] leading-[24px] hover:text-gray-600">Plant pots</Link>
         <Link href="./login" className="text-[16px] leading-[24px] hover:text-gray-600">Ceramics</Link>
         <Link href="./login" className="text-[16px] leading-[24px] hover:text-gray-600">Tables</Link>
         <Link href="./login" className="text-[16px] leading-[24px] hover:text-gray-600">chairs</Link> 
         <Link href="./login" className="text-[16px] leading-[24px] hover:text-gray-600">Crockery </Link>
         <Link href="./login" className="text-[16px] leading-[24px] hover:text-gray-600"> Tableware</Link>
         <Link href="./login" className="text-[16px] leading-[24px] hover:text-gray-600">Cutlery</Link>

         
         </nav>
         </div>
         </div>
         </div>
         )
         }
export default navbar;