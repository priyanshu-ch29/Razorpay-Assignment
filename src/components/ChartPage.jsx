import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import ChartImg from "../assets/Chart.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_RIGHT,
  X_LOGO,
} from "../utils/constant";
import { FiUser } from "react-icons/fi";
import { IoIosArrowRoundDown } from "react-icons/io";

const ChartPage = () => {
  return (
    <>
      <div className="h-screen text-white bg-background">
        <div className="w-[52%] ml-[32%]">
          <div className=" flex justify-between items-center pt-4">
            <span className="text-[13px]">Insights</span>
            <div className=" flex justify-center items-center text-blue-400 gap-2">
              <span className="text-[13px]">Detailed Insights</span>
              <IoIosArrowRoundForward className=" text-xl" />
            </div>
          </div>
          <div className=" bg-sidebarColor mt-4 w-full">
            <div className="pt-2 ml-4">
              <span className=" text-gray-500 text-[14px]">
                Payout volume - last 30 days
              </span>
              <span className="flex items-center text-[16px] font-bold">
                <LiaRupeeSignSolid className="text-gray-500 text-[20px] font-bold" />
                236,695{" "}
                <span className="text-[14px] text-gray-500 mt-1">.00</span>
              </span>
            </div>
            <img src={ChartImg} />
          </div>
          <div className=" bg-sidebarColor w-full mt-6 h-[68vh]">
            <div className="">
              <img src={TOP_RIGHT} className="absolute ml-[620px]" />
              <img
                src={BOTTOM_LEFT}
                className="absolute mt-[470px] -ml-[14px]"
              />
              <img
                src={BOTTOM_RIGHT}
                className=" absolute ml-[675px] top-[183%]"
              />
            </div>
            <div className="flex justify-between items-center pl-4 pt-4">
              <div className=" flex gap-2">
                <span>Activity Feed</span>
                <span className=" flex  items-center gap-1 text-gray-500 text-[14px]">
                  {" "}
                  <IoIosInformationCircleOutline /> Updated a few seconds ago
                </span>
              </div>
              <span className=" flex items-center gap-1 text-blue-500 pr-4">
                Show Filters <IoIosArrowDown className="mt-1" />{" "}
              </span>
            </div>

            <div className=" flex items-center gap-10 bg-gradient-custom mt-10 h-[15vh] w-[30%] ml-32">
              <div className=" flex flex-col justify-center items-center ml-[25%]">
                <span className=" text-[12px] font-semibold">23 JUL</span>
                <span className=" text-gray-500 text-[12px]">Tuesday</span>
              </div>
              <div className="border-l-2 border-gray-700 absolute left-[49rem]">
                <div className="flex items-center gap-5">
                  <FiUser className=" ml-10" />
                  <span className="flex">
                    1
                    <span className=" text-gray-500 ml-1">contact created</span>
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-10 bg-gradient-custom mt-5 h-[15vh] w-[30%] ml-32">
              <div className=" flex flex-col justify-center items-center ml-[25%]">
                <span className=" text-[12px] font-semibold">9 JUL</span>
                <span className=" text-gray-500 text-[12px]">Tuesday</span>
              </div>
              <div className="border-l-2 border-gray-700 absolute left-[49rem]">
                <div className="flex items-center gap-5">
                  <img src={X_LOGO} className=" ml-10" />
                  <span className="flex items-center text-white text-[12px] font-bold mt-1">
                    <LiaRupeeSignSolid className="text-gray-500 text-[12px] font-bold" />
                    236,695{" "}
                    <span className="text-[12px] text-gray-500 mt-1">
                      .00 created
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-10 bg-gradient-custom mt-5 h-[15vh] w-[30%] ml-32">
              <div className=" flex flex-col justify-center items-center ml-[25%]">
                <span className=" text-[12px] font-semibold">1 JUL</span>
                <span className=" text-gray-500 text-[12px]">Monday</span>
              </div>
              <div className="border-l-2 border-gray-700 absolute left-[49rem]">
                <div className="flex items-center gap-5">
                  <img src={X_LOGO} className=" ml-10" />
                  <span className="flex">
                    1<span className=" text-gray-500 ml-1">payout worth</span>
                  </span>
                  <span className="flex items-center text-white text-[12px] font-bold -ml-4 mt-1">
                    <LiaRupeeSignSolid className="text-gray-500 text-[12px] font-bold" />
                    236,695{" "}
                    <span className="text-[12px] text-gray-500 mt-1">
                      .00 created
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <button className="flex gap-2 items-center w-[15%] justify-center bg-background absolute left-[50rem] mt-3 text-white p-2 text-[12px] font-semibold">
              LOOK FOR OLDER ACTIVITES{" "}
              <IoIosArrowRoundDown className=" text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartPage;
