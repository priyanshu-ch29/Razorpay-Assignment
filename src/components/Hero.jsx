import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GrAnnounce } from "react-icons/gr";
import { FaArrowsRotate } from "react-icons/fa6";
import { X_LOGO } from "../utils/constant";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Account from "./Account";
import AmazonSection from "./AmazonSection";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Hero = () => {
  return (
    <div className="h-screen text-white bg-background">
      <div className="flex justify-end place-items-start gap-4 p-2">
        <button className="flex items-center justify-center gap-2 text-[15px] px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-sm shadow-md">
          + PAYOUT | <IoIosArrowDown />
        </button>
        <div className="flex gap-2 text-xl mt-1">
          <CiSearch className="text-blue-400" />
          <GrAnnounce className="text-orange-500" />
          <FiUser className="text-blue-400" />
        </div>
      </div>
      <div className="relative">
        <div className="absolute w-[52%] left-[32%]">
          <div className="flex gap-2 items-center">
            <img src={X_LOGO} alt="Logo" />
            <span className="flex items-center gap-2 text-[13px] text-gray-400 font-normal">
              RazorpayX Lite as of a few seconds ago <FaArrowsRotate />
            </span>
          </div>
          <div className="flex items-center mt-1">
            <span className="flex justify-center items-center text-2xl font-bold">
              <LiaRupeeSignSolid className="text-gray-500 text-[20px] font-bold" />
              100 <span className="text-[14px] text-gray-500 mt-2">.09</span>
            </span>
            <span className="ml-[15rem] border-l border-gray-600 pl-4 text-blue-500">
              + Add balance
            </span>
          </div>
          <div className="w-full mt-2">
            <span className="border border-dashed border-gray-500 p-3 rounded-md text-[16px] text-gray-500 font-medium block">
              🎉 You're all caught up. There are no more items pending on you.
            </span>
          </div>
          <div className="mt-2">
            <h1 className=" text-[14px] font-medium">
              Onboarding Updates <span className="text-gray-500">(1)</span>
            </h1>
          </div>
          <Account />
          <AmazonSection />
          <div className="bg-sidebarColor border border-blue-700 rounded-sm w-full mt-4 bg-[url('https://x.razorpay.com/dist/assets/img/parallel-onboarding/card-background.svg')] bg-30p bg-no-repeat flex">
            <div className="h-[13vh]">
              <RxCross2 className=" ml-[630%] mt-1" />
              <img
                src="https://x.razorpay.com/dist/assets/img/parallel-onboarding/razorpayx-lite-badge.svg"
                alt="Current Account"
                className=" w-[60%] ml-4 -mt-4"
              />
            </div>
            <div className=" ml-20 mt-2 flex items-center">
              <div className=" flex flex-col">
                <h1 className="font-semibold text-[14px] flex items-center">
                  <div
                    className="w-[5px] h-[15px] mr-3 bg-green-600"
                    style={{ transform: "translateX(-10%) rotate(150deg)" }}
                  ></div>
                  Automate Bookings for payouts.
                </h1>
                <span className=" text-[12px] text-gray-400">
                  close your books 60% faster and with better accuracy by{" "}
                </span>
                <span className="text-[12px] text-gray-400">
                  automating bookkepping for your Payouts.
                </span>
              </div>
              <button className="text-blue-700 text-[10px] ml-28 bg-transparent border border-blue-700 p-1 pl-4 mt-2 rounded flex justify-center items-center gap-2">
                Connect Zoho Books <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
