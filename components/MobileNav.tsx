import { authOptions, listItems } from "@/constants/navbar";
import Link from "next/link";

export default function MobileNav({ active } : { active: boolean }) {
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
    <div className="mobile-nav z-50 max-lg:block hidden absolute w-[90%] left-2/4 -translate-x-2/4 top-[120%]">
      <div className={`content w-full overflow-hidden bg-white shadow-md border-solid transition-all border-slate-300 rounded-md ${ active ? "max-lg:h-[388px] max-lg:p-6 max-lg:border-2" : "max-lg:h-0 max-lg:p-0 max-lg:border-0" }`}>
        <ul className="main-list flex flex-col items-center gap-5">
          {listItems.map((ele, index) => (
            <li
              className={`list-item relative cursor-pointer px-5 rounded-md text-[#E2AE63] overflow-hidden py-2 transition-all hover:before:w-full hover:before:h-full hover:text-white hover:rounded-tl-[0] hover:rounded-br-[0] ${listItemBefore}`}
              key={index}
            >
              <Link href={ele.link} className={`text-inherit z-50 relative`}>
                {ele.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="auth-options flex items-center gap-4 flex-col text-[14px] mt-6">
          {authOptions.map((ele, index) => (
            <button
              key={index}
              type="button"
              onClick={ele.callback}
              className={`py-2 px-7 rounded-md cursor-pointer font-bold transition-all ${
                ele.reverseEffect
                  ? "bg-white text-[#E2AE63] hover:bg-[#E2AE63] hover:text-white"
                  : "bg-[#E2AE63] text-white border-2 border-solid border-[#E2AE63] hover:bg-white hover:text-[#E2AE63]"
              }`}
            >
              {ele.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
