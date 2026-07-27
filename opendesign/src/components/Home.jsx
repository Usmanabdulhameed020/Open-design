import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiDiscordFill } from "react-icons/ri";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="bg-black">
      <section className="flex items-center justify-between px-10 h-[24px] pt-[32px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-[24px] w-[24px] gap-[32px] "
          />
        </div>

        {/* Menu */}
        <button className="text-gray-300">
          <HiOutlineMenuAlt4 className="w-8 h-7" />
        </button>
      </section>

      <section className="mt-[94px]">
        <div
          className="w-full h-[121px] text-[96px] leading-[100%] tracking-[-1px] mt-4 flex justify-end text-right"
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
          className="w-full h-[121px] text-[96px] leading-[100%] tracking-[-1px]"
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

      <section className="flex items-center justify-center text-[#FFF3E6] mt-4 cursor-pointer">
        <button
          className="w-[254px] h-[56px] rounded-[60px] bg-[#F08002] flex flex-row gap-2 text-[16px] leading-[24px] tracking-[0px] font-semibold items-center justify-center"
        >
        Join the crew now
        <RiDiscordFill className="w-[31px] h-[24px]" />
        </button>
      </section>

      <section className="bg-black flex justify-center px-10 mt-[94px] mb-[94px]">
        <div className="flex gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-[24px] h-[574px]">
            <img
              src="/Frame.png"
              alt=""
              className="w-[219px] h-[300px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (1).png"
              alt=""
              className="w-[219px] h-[250px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col mt-20 w-[219px] h-[574px] gap-[24px]">
            <img
              src="/Frame (2).png"
              alt=""
              className="w-[219px] h-[250px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (3).png"
              alt=""
              className="w-[219px] h-[300px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col w-[219px] h-[574px] gap-[24px]">
            <img
              src="/Frame (4).png"
              alt=""
              className="w-[219px] h-[250px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (5).png"
              alt=""
              className="w-[219px] h-[300px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col mt-20 w-[219px] h-[574px] gap-[24px]">
            <img
              src="/Frame (6).png"
              alt=""
              className="w-[219px] h-[300px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (7).png"
              alt=""
              className="w-[219px] h-[250px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 5 */}
          <div className="flex flex-col w-[219px] h-[574px] gap-[24px]">
            <img
              src="/Frame (8).png"
              alt=""
              className="w-[219px] h-[250px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (9).png"
              alt=""
              className="w-[219px] h-[300px] rounded-[12px] object-cover"
            />
          </div>

          {/* Column 6 */}
          <div className="flex flex-col mt-20 w-[219px] h-[574px] gap-[24px]">
            <img
              src="/Frame (10).png"
              alt=""
              className="w-[219px] h-[300px] rounded-[12px] object-cover"
            />
            <img
              src="/Frame (11).png"
              alt=""
              className="w-[219px] h-[250px] rounded-[12px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FDF0D5] px-50 py-50 flex justify-center items-center flex-col gap-4">
        <div className="flex flex-row gap-1">
          <p className="text-[#8B8475] text-center text-[48px] font-medium leading-[100%] tracking-[-1px]">
            We're African designers, 
          </p>
          <p className="text-[#4D4940] text-center text-[48px] font-medium leading-[100%] tracking-[-1px]">
            open-source
          </p>
        </div>
        <div className="flex flex-row gap-1"> 
          <p className="text-[#4D4940] text-center text-[48px] font-medium leading-[100%] tracking-[-1px]">
            and proud,
          </p>
          <p className="text-[#8B8475] text-center text-[48px] font-medium leading-[100%] tracking-[-1px]">
            building a crew that turns
          </p>
        </div>
        <div>
          <p className="text-[#8B8475] text-center text-[48px] font-medium leading-[100%] tracking-[-1px]">
            one into many for all to join.
          </p>
        </div>

        <button
          className="w-[251px] h-[56px] rounded-[8px] gap-[8px] bg-[#4D4940] text-[#F8F9FA] text-[16px] leading-[24px] tracking-[0px] font-normal mt-10 cursor-pointer"
        >
          Explore our community
        </button>
      </section>

      <section className="bg-[#FFFEFB] pl-10 py-45 h-[1149px] gap-[48px]">
        <p
          className="font-medium text-[48px] text-[#4D4940] leading-[100%] tracking-[-1px] text-center"
        >
          Meet the Trailblazers Behind OpenDesign
        </p>

        <div className="mt-14">
          <div className="flex w-max gap-5">
            <div className="flex flex-col">
              <img
                src="/Frame1.png"
                alt=""
                className="w-[450px] h-[600px] rounded-[16px]"
              />
              <nav>
                <p className="text-[#4D4940] text-[20px] font-medium leading-[100%] tracking-[-1px] mt-4">
                  Areous Ahmad
                </p>
                <p className="font-normal text-[16px] leading-[100%] tracking-[-1px] text-[#8B8475] mt-4">
                  Senior Product Designer | Founder @SugarBox
                </p>
              </nav>
            </div>

            <div className="flex flex-col">
              <img
                src="/Frame2.png"
                alt=""
                className="w-[450px] h-[600px] rounded-[16px]"
              />
              <nav>
                <p className="text-[#4D4940] text-[20px] font-medium leading-[100%] tracking-[-1px] mt-4">
                  Sarah Andrew
                </p>
                <p className="font-normal text-[16px] leading-[100%] tracking-[-1px] text-[#8B8475] mt-4">
                  Motion Designer @Meta
                </p>
              </nav>
            </div>

            <div className="flex flex-col">
              <img
                src="/Frame3.png"
                alt=""
                className="w-[450px] h-[600px] rounded-[16px]"
              />
              <nav>
                <p className="text-[#4D4940] text-[20px] font-medium leading-[100%] tracking-[-1px] mt-4">
                  Adeniran Emmanuel
                </p>
                <p className="font-normal text-[16px] leading-[100%] tracking-[-1px] text-[#8B8475] mt-4">
                  Senior Product Designer @Calcare
                </p>
              </nav>
            </div>

            <div className="flex flex-col">
              <img
                src="/Frame (1).png"
                alt=""
                className="w-[450px] h-[600px] rounded-[16px]"
              />
              <nav>
                <p className="text-[#4D4940] text-[20px] font-medium leading-[100%] tracking-[-1px] mt-4">
                  Jimmy James
                </p>
                <p className="font-normal text-[16px] leading-[100%] tracking-[-1px] text-[#8B8475] mt-4">
                  Web Designer @Webflow
                </p>
              </nav>
            </div>
          </div>
        </div>
       
      </section>

      <section className="h-[556px] bg-black flex flex-col">
        <nav className="flex flex-row items-center justify-center mt-24">
          <p className="text-[#6C757D] text-[36px] font-medium flex leading-[100%] tracking-[-1px]">
            The open-source design crew
          </p>
          <p className="text-[#F8F9FA] text-[36px] font-medium flex leading-[100%] tracking-[-1px]">
            —your spot’s waiting
          </p>
        </nav>

        <div className="flex justify-center mt-20">
          <button
            className="w-[255px] h-14 text-white rounded-[60px] bg-[#F08002] flex flex-row gap-2 text-[16px] leading-6 tracking-normal font-semibold items-center justify-center cursor-pointer"
          >
            Join the crew now
            <RiDiscordFill className="w-7 h-6" />
          </button>
        </div>

        <div className="flex flex-row items-center justify-center text-white gap-6 mt-66">
          <FaLinkedin />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </section>
    </div>
  )
}

export default Home