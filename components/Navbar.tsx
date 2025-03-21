"use client";

import { authOptions, listItems } from "@/constants/navbar";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const listItemBefore = `
    before:content-['']
    before:absolute
    before:w-[10px]
    before:h-[10px]
    before:bg-[#E2AE63]
    before:top-0
    before:right-0
    before:z-[10]
    before:rounded-bl-[10px]
    before:transition-all
  `;

  return (
    <nav className="navbar relative lg:container mx-auto px-6 py-3 bg-white flex items-center justify-between flex-row-reverse">
      <button onClick={() => setIsActive(!isActive)} className="exchange-btn hidden text-[#E2AE63] max-lg:flex cursor-pointer w-[40px] rounded-md transition-all hover:text-white hover:bg-[#E2AE63] h-[40px] items-center justify-center">
        { isActive ? <IoMdClose size={32} className="text-inherit" /> : <IoMenu size={32} className="text-inherit" /> }
      </button>
      <div className="auth-options flex items-center gap-4 max-lg:hidden ">
        { authOptions.map((ele, index) => (
          <button key={index} type="button" onClick={ele.callback} className={`py-2 px-7 rounded-md cursor-pointer font-bold transition-all ${ele.reverseEffect ? "bg-white text-[#E2AE63] hover:bg-[#E2AE63] hover:text-white" : "bg-[#E2AE63] text-white border-2 border-solid border-[#E2AE63] hover:bg-white hover:text-[#E2AE63]"}`}>{ele.text}</button>
        )) }
      </div>
      <ul className="main-list flex items-center gap-5 max-lg:hidden">
        { listItems.map((ele, index) => (
          <li className={`list-item relative cursor-pointer px-5 rounded-md text-[#E2AE63] overflow-hidden py-2 transition-all hover:before:w-full hover:before:h-full hover:text-white hover:rounded-tl-[0] hover:rounded-br-[0] ${listItemBefore}`} key={index}>
            <Link href={ele.link} className={`text-inherit z-50 relative`}>{ele.text}</Link>
          </li>
        )) }
      </ul>
      <Image src={"/logo.png"} alt="Logo" width={160} height={160} />
      <MobileNav active={isActive} />
    </nav>
  )
}