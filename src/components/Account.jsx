import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Current_Acc } from "../utils/constant";

const Account = () => {
  return (
    <>
      <div className="bg-sidebarColor rounded-md w-full mt-1 bg-[url('https://x.razorpay.com/dist/assets/img/parallel-onboarding/card-background.svg')] bg-10p bg-no-repeat bg-start flex">
        <div className="h-[18vh]">
          <img src={Current_Acc} alt="Current Account" />
        </div>
        <div className=" ml-14 mt-2">
          <h1>Open your RazorpayX Account.</h1>
          <span className=" text-[12px] text-gray-400">
            Don't let bankache come in the way of your growth. Apply for your
            RazorpayX account with a few basic details.
          </span>
          <div className="flex gap-1 mt-4">
            <div className=" w-[23%] h-[0.5vh] rounded-md bg-gradient-to-r from-green-400 to-gray-500"></div>
            <div className=" w-[23%] h-[0.5vh] rounded-md bg-gray-500"></div>
            <div className=" w-[23%] h-[0.5vh] rounded-md bg-gray-500"></div>
            <div className=" w-[23%] h-[0.5vh] rounded-md bg-gray-500"></div>
          </div>
          <div className=" flex justify-between items-center mt-2 mr-4">
            <button className=" bg-blue-600 p-1 pl-4 mt-2 rounded flex justify-center items-center gap-2">
              Start Application <IoIosArrowRoundForward />
            </button>
            <span className=" text-gray-500">0/4</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
