import Image from "next/image"
import React from "react";
import Footer from "./footer";
import Header from "./header";

const Hero = () => {
  return (
    <main className="w-full lg:flex-row md:h-[584px] h-fit  bg-slate-200 mx-auto md:flex sm:flex-col">
      <Header />
      <div className="md:h-[584px] lg:w-[calc(100%-520px)] bg-[#2A254B] md:flex md:flex-col md:justify-around items-start lg:pt-10 px-5 md:p-10 xl:p-0">

        <div className="xl:w-[513px] lg:h-[187px] md:h-fit flex flex-col md:gap-[41px] xl:ml-[60px] mb-10">
          <p className="text-[2rem] lg:text-[2rem] font-[400] leading-[44.8px] clashDisplay text-[#FFFFFF] tracking-wider mt-10 lg:mt-0 md:text-[3rem]">
            The furniture brand for the future, with timeless designs
          </p>
          <button className="hidden md:block w-[170px] h-[56px] bg-[#F9F9F926] text-[#FFFFFF] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] ">
            View collection
          </button>
        </div>


        <div className="xl:w-[602px] w-full h- md:h-fit break-words xl:ml-[60px]">
          <p className="text-[18px] lg:text-[18px] satoshi text-[#FFFFFF] font-[400] leading-[27px] break-words tracking-wider] md:text-2xl">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <button className="mt-10 mb-8 md:hidden md:w-[170px] w-full h-[56px] bg-[#F9F9F926] text-[#FFFFFF] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] md:text-[3rem] lg:text-[1rem]">
            View collection
          </button>
        </div>
      </div>

      <div className="xl:w-[520px] md:w-auto hidden xl:h-[584px] lg:block">
        <Image
          src="/chair.svg"
          alt="RightImage"
          width={520}
          height={584}
        ></Image>

        
      <div className="w-full h-auto pb-16">
        <h1 className="text-center text-custom-purple text-xl">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              img: "/d.svg",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/d1.svg",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/d3.svg",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/d4.svg",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
              <p className="text-custom-purple mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div> 
       <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-custom-purple h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
          <main className="w-full mx-auto flex flex-col xl:flex-row items-center xl:h-[603px] h-auto pt-10 xl:py-0">
      <div className="xl:w-1/2 w-full flex flex-col justify-center gap-y-12 px-6 xl:px-12 mb-0 xl:mb-0">
        <div className="w-full max-w-[536px] flex flex-col gap-6">
          <p className="text-[20px] md:text-[24px] leading-8 clashDisplay">
            From a studio in London to a global brand with over 400 outlets
          </p>
          <p className="satoshi font-[400] text-[#505977] sm:text-[14px] md:text-[16px]">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="satoshi font-[400] text-[#505977] sm:text-[14px] md:text-[16px] ">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design. Our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>

        <button className="md:w-[150px] w-full h-[48px] md:h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] mb-8">
          Get in touch
        </button>
      </div>

      
      <div className="xl:w-1/2 w-full xl:px-0">
        <Image
          src="/Image.svg"
          alt="studio"
          height={603}
          width={720}
          className="w-full h-auto object-cover"
        />
      </div>
    </main>
        </div>
      </div> 
        </div>
        <Footer />
    </main>
  );
};

export default Hero;