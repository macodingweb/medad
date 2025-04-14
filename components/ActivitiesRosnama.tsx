import { actionBtns, cardsDetails, eventDetails } from "@/constants/landing"
import Image from "next/image"

export default function ActivitiesRosnama() {
  return (
    <section className="modern-actions p-6 container mx-auto mb-4 max-md:mb-6">
      <div className="title mb-3 text-[24px] font-bold text-slate-800">أحدث الفعاليات</div>
      <div className="content flex items-center w-full bg-neutral-950 rounded-l-lg max-lg:flex-col overflow-hidden rounded-lg">
        <div className="right-image h-full max-lg:mx-4">
          <Image src={"/activities/_activitiy-2.jpeg"} alt="Img" className="h-full aspect-[4/4] max-lg:mt-4 max-lg:rounded-lg max-lg:aspect-auto object-cover" width={400} height={400} />
        </div>
        <div className="content mr-6 py-3 max-lg:p-6 max-lg:mr-0 flex items-center max-lg:flex-col-reverse">
          <div className="details">
            <span className="type text-[#E2AE63] font-bold">لقاء</span>
            <h3 className="title text-white font-bold text-[18px] mb-2">فعاليه العطاء لحفظ النعم</h3>
            <p className="desc w-[50%] max-lg:w-full my-3 text-neutral-300 leading-[1.7] text-[14px]">انطلاقاً من أهداف رؤيـة المملكـة العربيـة السعوديـة 2030 في تعظيم أثـر القطــاع غيـر الربحـي فـي التنمية وتمكين منظمات القطاع للقيام بأدوارها التنمويـة وزيـادة مساهمتها فـي الناتـج المحلي الإجمالي</p>
            <div className="user-actions-wrapper flex items-center gap-3 mt-4 max-md:flex-col max-md:items-start">
              <div className="action-btns flex gap-3 items-center max-md:text-[14px]" >
                {actionBtns.map((ele, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`rounded-md cursor-pointer transition-all text-[14px] p-2 font-bold border-2 border-solid ${
                      ele.favourite
                        ? "bg-white text-[#E2AE63] border-white hover:border-[#E2AE63] hover:bg-[#E2AE63] hover:text-white"
                        : " text-black bg-[#E2AE63] px-7 border-[#E2AE63] hover:bg-transparent hover:text-white"
                    } `}
                  >
                    {ele.favourite ? ele.icon : ele.text}
                  </button>
                ))}
              </div>
              <div className="event-details max-md:text-[14px] flex items-center gap-3 max-md:flex-col max-md:items-start" >
                {eventDetails.map((ele, index) => (
                  <div
                    className="detail-card flex items-center gap-2"
                    key={index}
                  >
                    <div className="icon text-[#E2AE63]">{ele.icon}</div>
                    <span className="font-bold text-white text-[14px]">{ele.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="time-remaining flex flex-wrap gap-5 text-center max-lg:mb-6 max-lg:justify-center">
            {cardsDetails.map((ele, index) => (
              <div
                className="card w-[80px] h-[80px] max-md:w-[90px] max-md:h-[90px] bg-[#FFFFFF4D] rounded-md flex items-center justify-center flex-col"
                key={index}
              >
                <span className="text-[#E2AE63] font-bold text-[20px]">
                  {ele.count}
                </span>
                <span className="text-[14px] font-light text-white">
                  {ele.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}