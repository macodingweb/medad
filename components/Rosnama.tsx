import { IoSearch } from "react-icons/io5";
import Image from "next/image";

export default function Rosnama() {
  const types = ["الفعاليات", "الأمسيات", "اللقاءات", "المؤتمرات", "الندوات", "هذا الشهر", "الرياض"];

  return (
    <>
      <section className="rosnama-landing px-6 py-10 bg-gradient-to-br from-[#C39E61] to-[#E2AE63] overflow-hidden mb-8 rounded-b-3xl relative">
        <div className="img absolute -top-1 left-0 h-full z-0 pointer-events-none max-md:w-full">
          <Image src={"/bg-icon-lines.png"} alt="Ellipse" width={900} height={900} />
        </div>
        <div className="img absolute right-0 -bottom-12 h-full z-0 pointer-events-none max-lg:hidden">
          <Image src={"/bg-icon-lines-1.png"} alt="Ellipse" width={360} height={360} />
        </div>
        {/* <Image src={"/bg-icon-lines.png"} alt="Ellipse" width={800} height={800} className="absolute -top-1 -left-4" /> */}
        <div className="container mx-auto text-center z-20 relative">
          <h1 className="title text-[34px] font-bold text-neutral-950 mb-2">الفعاليات</h1>
          <p className="desc w-[56%] text-neutral-800 font-bold leading-[1.7] mx-auto max-lg:w-full">شهد العمل الخيري تطورات كبيرة انتقل معها من الجهود الفردية إلى العمل المؤسسي، مما استدعى تنظيمه لتحقيق أهدافه بفعالية. لذا جاء مداد كمركز متخصص في الدراسات </p>
          <div className="search-container flex items-center justify-center mt-8 mb-4">
            <input type="text" name="search-query" placeholder="البحث" className="w-[25%] max-lg:w-full h-[40px] outline-0 bg-white rounded-r-md px-3" />
            <button type="submit" className="text-white bg-neutral-950 w-[40px] h-[40px] rounded-l-md flex items-center justify-center cursor-pointer">
              <IoSearch size={22} />
            </button>
          </div>
          <div className="sort-card-group flex items-center gap-4 w-fit mx-auto flex-wrap justify-center">
            { types.map((ele, index) => (
              <div className={`sort-card py-2 px-4 cursor-pointer transition-all max-lg:text-[14px] ${index === 0 ? "bg-white font-bold" : "bg-[#ffffff78] font-semibold hover:bg-white"} rounded-md`} key={index}>{ele}</div>
            )) }
          </div>
        </div>
      </section>
      
    </>
  )
}