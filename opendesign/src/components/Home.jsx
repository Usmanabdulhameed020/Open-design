import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiDiscordFill } from "react-icons/ri";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="flex items-center justify-between px-6 md:px-10 h-[24px] pt-[32px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-[24px] w-[24px] gap-[32px]"
          />
        </div>

        {/* Menu */}
        <button className="text-gray-300 cursor-pointer hover:text-white transition-colors">
          <HiOutlineMenuAlt4 className="w-8 h-7" />
        </button>
      </section>

      {/* Hero Headline */}
      <section className="mt-[60px] md:mt-[94px] px-6 md:px-0">
        <div
          className="w-full min-h-[50px] md:h-[121px] text-[36px] sm:text-[64px] md:text-[96px] leading-[110%] md:leading-[100%] tracking-[-1px] mt-4 flex justify-end text-right"
          style={{
            background: 'linear-gradient(to right, #F8F9FA, #333333)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Join the Design Rebellion—
        </div>
        <div
          className="w-full min-h-[50px] md:h-[121px] text-[36px] sm:text-[64px] md:text-[96px] leading-[110%] md:leading-[100%] tracking-[-1px]"
          style={{
            background: 'linear-gradient(to left, #F8F9FA, #333333)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          -We're Building It Together
        </div>
      </section>

      {/* CTA Button */}
      <section className="flex items-center justify-center text-[#FFF3E6] mt-8 md:mt-4">
        <button
          className="w-[254px] h-[56px] rounded-[60px] bg-[#F08002] flex flex-row gap-2 text-[16px] leading-[24px] tracking-[0px] font-semibold items-center justify-center font-poppins cursor-pointer hover:bg-[#d67202] transition-colors duration-200"
        >
          Join the crew now
          <RiDiscordFill className="w-[31px] h-[24px]" />
        </button>
      </section>

      {/* Alternating Masonry Grid / Horizontal Slider */}
      <section className="bg-black flex justify-center w-full overflow-hidden mt-12 md:mt-[94px] mb-12 md:mb-[94px]">
        <div className="flex gap-4 overflow-x-auto scrollbar-none px-6 md:px-10 w-full lg:w-auto lg:overflow-x-visible lg:justify-center">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-[24px] h-[400px] md:h-[574px] w-[140px] sm:w-[180px] md:w-[219px] shrink-0">
            <img
              src="/Frame.png"
              alt=""
              className="w-full h-[220px] md:h-[300px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (1).png"
              alt=""
              className="w-full h-[164px] md:h-[250px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col mt-10 md:mt-20 w-[140px] sm:w-[180px] md:w-[219px] h-[400px] md:h-[574px] gap-4 md:gap-[24px] shrink-0">
            <img
              src="/Frame (2).png"
              alt=""
              className="w-full h-[164px] md:h-[250px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (3).png"
              alt=""
              className="w-full h-[220px] md:h-[300px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col w-[140px] sm:w-[180px] md:w-[219px] h-[400px] md:h-[574px] gap-4 md:gap-[24px] shrink-0">
            <img
              src="/Frame (4).png"
              alt=""
              className="w-full h-[164px] md:h-[250px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (5).png"
              alt=""
              className="w-full h-[220px] md:h-[300px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col mt-10 md:mt-20 w-[140px] sm:w-[180px] md:w-[219px] h-[400px] md:h-[574px] gap-4 md:gap-[24px] shrink-0">
            <img
              src="/Frame (6).png"
              alt=""
              className="w-full h-[220px] md:h-[300px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (7).png"
              alt=""
              className="w-full h-[164px] md:h-[250px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 5 */}
          <div className="flex flex-col w-[140px] sm:w-[180px] md:w-[219px] h-[400px] md:h-[574px] gap-4 md:gap-[24px] shrink-0">
            <img
              src="/Frame (8).png"
              alt=""
              className="w-full h-[164px] md:h-[250px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (9).png"
              alt=""
              className="w-full h-[220px] md:h-[300px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 6 */}
          <div className="flex flex-col mt-10 md:mt-20 w-[140px] sm:w-[180px] md:w-[219px] h-[400px] md:h-[574px] gap-4 md:gap-[24px] shrink-0">
            <img
              src="/Frame (10).png"
              alt=""
              className="w-full h-[220px] md:h-[300px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (11).png"
              alt=""
              className="w-full h-[164px] md:h-[250px] rounded-[12px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* We're African Designers section */}
      <section className="bg-[#FDF0D5] px-6 py-16 md:px-20 lg:px-50 md:py-32 lg:py-50 flex justify-center items-center flex-col gap-2 md:gap-4">
        <div className="flex flex-col md:flex-row gap-1 items-center justify-center">
          <p className="text-[#8B8475] text-center text-[24px] sm:text-[36px] md:text-[48px] font-medium leading-[120%] md:leading-[100%] tracking-[-1px]">
            We're African designers,
          </p>
          <p className="text-[#4D4940] text-center text-[24px] sm:text-[36px] md:text-[48px] font-medium leading-[120%] md:leading-[100%] tracking-[-1px] md:ml-1.5">
            open-source
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-1 items-center justify-center">
          <p className="text-[#4D4940] text-center text-[24px] sm:text-[36px] md:text-[48px] font-medium leading-[120%] md:leading-[100%] tracking-[-1px]">
            and proud,
          </p>
          <p className="text-[#8B8475] text-center text-[24px] sm:text-[36px] md:text-[48px] font-medium leading-[120%] md:leading-[100%] tracking-[-1px] md:ml-1.5">
            building a crew that turns
          </p>
        </div>
        <div>
          <p className="text-[#8B8475] text-center text-[24px] sm:text-[36px] md:text-[48px] font-medium leading-[120%] md:leading-[100%] tracking-[-1px]">
            one into many for all to join.
          </p>
        </div>

        <button
          className="w-[251px] h-[56px] rounded-[8px] gap-[8px] bg-[#4D4940] text-[#F8F9FA] text-[16px] leading-[24px] tracking-[0px] font-normal mt-8 md:mt-10 cursor-pointer hover:bg-[#3b3832] transition-colors duration-200"
        >
          Explore our community
        </button>
      </section>

      {/* Trailblazers Section */}
      <section className="bg-[#FFFEFB] py-16 md:py-32 lg:py-[180px] h-auto lg:h-[1149px] flex flex-col justify-center overflow-hidden">
        <p
          className="font-medium text-[32px] sm:text-[40px] md:text-[48px] text-[#4D4940] leading-[120%] md:leading-[100%] tracking-[-1px] text-center px-6"
        >
          Meet the Trailblazers Behind OpenDesign
        </p>

        <div className="mt-10 md:mt-14 overflow-x-auto scrollbar-none px-6 md:px-10 lg:pl-10 w-full">
          <div className="flex gap-5 w-max">
            {/* Trailblazer 1 */}
            <div className="flex flex-col w-[260px] sm:w-[340px] md:w-[450px] shrink-0">
              <img
                src="/Frame1.png"
                alt=""
                className="w-full h-[347px] sm:h-[453px] md:h-[600px] rounded-[16px] object-cover"
              />
              <nav>
                <p className="text-[#4D4940] text-[18px] sm:text-[20px] font-medium leading-[120%] tracking-[-1px] mt-4">
                  Areous Ahmad
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] leading-[130%] md:leading-[100%] tracking-[-1px] text-[#8B8475] mt-2 md:mt-4">
                  Senior Product Designer | Founder @SugarBox
                </p>
              </nav>
            </div>

            {/* Trailblazer 2 */}
            <div className="flex flex-col w-[260px] sm:w-[340px] md:w-[450px] shrink-0">
              <img
                src="/Frame2.png"
                alt=""
                className="w-full h-[347px] sm:h-[453px] md:h-[600px] rounded-[16px] object-cover"
              />
              <nav>
                <p className="text-[#4D4940] text-[18px] sm:text-[20px] font-medium leading-[120%] tracking-[-1px] mt-4">
                  Sarah Andrew
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] leading-[130%] md:leading-[100%] tracking-[-1px] text-[#8B8475] mt-2 md:mt-4">
                  Motion Designer @Meta
                </p>
              </nav>
            </div>

            {/* Trailblazer 3 */}
            <div className="flex flex-col w-[260px] sm:w-[340px] md:w-[450px] shrink-0">
              <img
                src="/Frame3.png"
                alt=""
                className="w-full h-[347px] sm:h-[453px] md:h-[600px] rounded-[16px] object-cover"
              />
              <nav>
                <p className="text-[#4D4940] text-[18px] sm:text-[20px] font-medium leading-[120%] tracking-[-1px] mt-4">
                  Adeniran Emmanuel
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] leading-[130%] md:leading-[100%] tracking-[-1px] text-[#8B8475] mt-2 md:mt-4">
                  Senior Product Designer @Calcare
                </p>
              </nav>
            </div>

            {/* Trailblazer 4 */}
            <div className="flex flex-col w-[260px] sm:w-[340px] md:w-[450px] shrink-0">
              <img
                src="/Frame (1).png"
                alt=""
                className="w-full h-[347px] sm:h-[453px] md:h-[600px] rounded-[16px] object-cover"
              />
              <nav>
                <p className="text-[#4D4940] text-[18px] sm:text-[20px] font-medium leading-[120%] tracking-[-1px] mt-4">
                  Jimmy James
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] leading-[130%] md:leading-[100%] tracking-[-1px] text-[#8B8475] mt-2 md:mt-4">
                  Web Designer @Webflow
                </p>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="h-auto min-h-[400px] lg:h-[556px] bg-black flex flex-col justify-between py-12 md:py-16">
        <div className="flex-grow flex flex-col justify-center items-center">
          <nav className="flex flex-col md:flex-row items-center justify-center px-6 text-center gap-1 md:gap-0">
            <p className="text-[#6C757D] text-[24px] sm:text-[30px] md:text-[36px] font-medium leading-[120%] md:leading-[100%] tracking-[-1px]">
              The open-source design crew
            </p>
            <p className="text-[#F8F9FA] text-[24px] sm:text-[30px] md:text-[36px] font-medium leading-[120%] md:leading-[100%] tracking-[-1px] md:ml-2">
              —your spot’s waiting
            </p>
          </nav>

          <div className="flex justify-center mt-10 md:mt-20">
            <button
              className="w-[255px] h-14 text-white rounded-[60px] bg-[#F08002] flex flex-row gap-2 text-[16px] leading-6 tracking-normal font-semibold items-center justify-center cursor-pointer font-poppins hover:bg-[#d67202] transition-colors"
            >
              Join the crew now
              <RiDiscordFill className="w-7 h-6" />
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center text-white gap-6 mt-12 mb-4">
          <FaLinkedin className="cursor-pointer hover:text-[#F08002] transition-colors w-5 h-5" />
          <FaInstagram className="cursor-pointer hover:text-[#F08002] transition-colors w-5 h-5" />
          <FaXTwitter className="cursor-pointer hover:text-[#F08002] transition-colors w-5 h-5" />
        </div>
      </section>
    </div>
  )
}

export default Home