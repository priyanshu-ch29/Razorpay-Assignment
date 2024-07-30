import React from "react";
import { TiTick } from "react-icons/ti";

const AmazonSection = () => {
  return (
    <>
      <div className="bg-sidebarColor rounded w-full mt-8 border-t-2 border-green-500 pb-2">
        <div className=" flex justify-between ml-4 mt-4">
          <div>
            <h1 className=" font-semibold text-[16px]">
              Amazon Instant <span className="flex flex-col">Settlements</span>
            </h1>
          </div>
          <div className="flex mr-10">
            <div className=" bg-blue-900 w-[15px] h-[2vh] rounded-full mr-5 mt-1">
              <span className=" bg-blue-500 absolute ml-1 mt-1 w-[8px] h-[1vh] rounded-full"></span>
            </div>
            <div className=" flex flex-col">
              <span className=" text-[13px]">Let's get you started</span>
              <span className=" text-[13px]">
                Complete your application and get instant access to your Amazon
                payouts
              </span>
              <button className="bg-blue-600 p-1 mt-2 rounded-sm w-[30%] font-semibold text-[15px]">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sidebarColor rounded w-full border-t-2 border-green-500 pb-2">
        <div className=" flex items-center justify-between ml-4 mt-4">
          <div>
            <h1 className=" font-semibold text-[16px]">
              Creating payouts
              <span className="flex flex-col">in Live mode</span>
            </h1>
          </div>
          <div className=" flex">
            <div className=" flex flex-col">
              <div className="bg-gray-700 w-[15px] h-[2vh] rounded-full mr-5 mt-1">
                <TiTick className=" text-green-500 text-[15px]" />
              </div>
              <div className=" bg-blue-900 w-[15px] h-[2vh] rounded-full mr-5 mt-2">
                <span className=" bg-blue-500 absolute ml-1 mt-1 w-[8px] h-[1vh] rounded-full"></span>
              </div>
            </div>
            <div className="flex flex-col mr-24">
              <div className="border-b-2 border-gray-700">
                <span className=" text-gray-500 font-semibold text-[14px]">
                  Add balance{" "}
                  <span className=" text-gray-500 font-normal text-[12px]">
                    to create payouts in live mode
                  </span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className=" text-[13px] font-semibold">
                  Create payout
                </span>
                <span className=" text-[13px] text-gray-500">
                  There are multiple ways in which you can create the first
                  payout:
                </span>
                <div className=" flex gap-2">
                  <button className="bg-blue-600 p-1 mt-2 rounded-sm font-semibold w-[30%] text-[10px]">
                    MAKE A PAYOUT
                  </button>
                  <button className="bg-gray-600 font-semibold p-1 mt-2 rounded-sm w-[35%] text-[10px] text-white">
                    SHOW APPS FOR ME
                  </button>
                  <button className="bg-gray-600 p-1 mt-2 font-semibold rounded-sm w-[30%] text-[10px] text-white">
                    API PAYOUTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmazonSection;
