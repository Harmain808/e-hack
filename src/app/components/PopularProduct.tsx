import Image from "next/image";
import Footer from "./footer";
import Header from "./header";

const PopularProduct = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-y-2 mt-10 px-5 md:px-10 xl:px-0">
      <Header />
      <h1 className="clashDisplay md:text-[2rem] text-[20px] font-[400px] md:self-center self-start mb-3 xl:self-start">
        Our popular products
      </h1>
      <div className="flex gap-5 xl:gap-5">
            <div className="xl:w-[305px] w-full lg:w-[320px]  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
          <Image
            src="/1.svg"
            height={375}
            width={305}
            alt="CHAIR"
            className="md:w-auto h-auto"
          ></Image>
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              The Lucy Lamp
            </p>
            <p className="satoshi sm:text-[18px] text-[14px]leading-7 text-[#2A254B]">£399</p>
          </div>
        </div>
        <div className="lg:w-[630px] w-full  h-fit xl:h-[462px] bg-white gap-[24px] flex-col hidden xl:flex">
          <Image
            src="/2.svg"
            height={630}
            width={375}
            alt="CHAIR"
            className="md:w-auto h-auto"
          ></Image>
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              The Poplar suede sofa
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">£980</p>
          </div>
        </div>

        <div className="xl:w-[305px] w-full lg:w-[320px]  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col">
          <Image
            src="/3.svg"
            height={375}
            width={305}
            alt="CHAIR"
            className="md:w-auto h-auto"
          ></Image>
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              Rustic Vase Set
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">£155</p>
          </div>
        </div>
        <div className="xl:w-[305px] w-full lg:w-[320px]  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col">
          <Image
            src="/8.svg"
            height={375}
            width={305}
            alt="CHAIR"
            className="md:w-auto h-auto"
          ></Image>
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              The Silky Vase
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">£125</p>
          </div>
        </div>
      </div>
      <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] my-4">
        View collection
      </button>
      <Footer />
    </main>
  );
};

export default PopularProduct;
