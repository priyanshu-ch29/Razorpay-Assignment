import React from "react";
import { LOGO_URL } from "../utils/constant";
import { IoHomeOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GrNotes } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbPaywall } from "react-icons/tb";
import { BsSendArrowDown } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className=" bg-background min-h-screen flex fixed">
        <div className="w-64 bg-sidebarColor p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Razorpay Logo" />
          </div>
          <ul className="flex flex-col gap-3 text-white font-light">
            <li className="p-2 flex items-center gap-2 cursor-pointer">
              <IoHomeOutline />
              Home
            </li>
            <li className="p-2 flex items-center gap-2 cursor-pointer">
              <MdArrowOutward />
              Payouts
            </li>
            <li className="p-2 flex items-center gap-2 cursor-pointer">
              <IoDocumentTextOutline />
              Account Statement
            </li>
            <li className="p-2 flex items-center gap-2 cursor-pointer border-b border-gray-600 ">
              <RiContactsLine />
              Contacts
            </li>
            <li className="p-2 flex items-center gap-2 cursor-pointer">
              <LiaRupeeSignSolid />
              Loans
              <span className=" text-[8px] bg-green-700 w-[30px] text-center rounded-lg p-0.5">
                NEW
              </span>
            </li>
            <li className="p-2 flex items-center gap-2 cursor-pointer">
              <GrNotes />
              Vendor Payments
            </li>
            <div className=" flex gap-2 ml-8 -mt-3">
              <span className=" text-[8px] text-center bg-green-700 w-[30px] h-[17px] rounded-lg p-0.5">
                NEW
              </span>
              <span className=" text-blue-400 text-[12px] font-semibold flex justify-center items-center gap-2">
                Invoice Approvals{" "}
                <IoIosArrowRoundForward className=" text-[20px]" />
              </span>
            </div>
            <li className="p-2 flex items-center gap-2 cursor-pointer">
              <CgNotes />
              Tax Payments
            </li>
            <li className="p-2 flex items-center gap-2 cursor-pointer">
              <BsSendArrowDown />
              Payout Links
            </li>
            <li className="p-2 flex items-center gap-2 cursor-pointer">
              <TbPaywall />
              Payroll
            </li>
            <li className="p-2 flex items-center gap-2 cursor-pointer">
              <IoDocumentTextOutline />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
