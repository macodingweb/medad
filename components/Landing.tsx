"use client";

import {
  actionBtns,
  cardsDetails,
  eventDetails,
  leftSideCards,
} from "@/constants/landing";
import Image from "next/image";
import { motion } from "motion/react";

export default function Landing() {
  const duration = 0.2;

  return (
    <section className="landing rounded-b-2xl relative max-lg:pb-[80px] max-lg:mb-[120px]">
      <div className="container mx-auto flex max-lg:flex-col items-center justify-between max-lg:justify-center p-8 max-lg:px-0">
        <div className="right max-lg:flex items-center gap-4 px-4">
          <div className="content">
            <motion.span
              transition={{
                duration: duration,
              }}
              initial={{
                opacity: 0,
                transform: "translate(20px, 0)",
              }}
              animate={{ opacity: 1, transform: "translate(0, 0)" }}
              className="font-bold text-[#E2AE63] mb-2"
            >
              الفعالية القادمة
            </motion.span>
            <motion.h2
              transition={{
                duration: duration,
                delay: 0.2,
              }}
              initial={{
                opacity: 0,
                transform: "translate(20px, 0)",
              }}
              animate={{ opacity: 1, transform: "translate(0, 0)" }}
              className="title text-[32px] max-md:text-[18px] font-bold leading-[1.4] mb-4 text-white"
            >
              المؤتمر العالمي للابحاث <br /> والمعلومات والابتكار في <br />{" "}
              القطاع الخيري (أبحاث)
            </motion.h2>
            <motion.div
              transition={{
                duration: duration,
                delay: 0.5,
              }}
              initial={{
                opacity: 0,
                transform: "translate(20px, 0)",
              }}
              animate={{ opacity: 1, transform: "translate(0, 0)" }}
              className="event-details grid gap-2 max-md:text-[14px]"
            >
              {eventDetails.map((ele, index) => (
                <div
                  className="detail-card flex items-center gap-2"
                  key={index}
                >
                  <div className="icon text-[#E2AE63]">{ele.icon}</div>
                  <span className="font-bold text-white">{ele.text}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              transition={{
                duration: duration,
                delay: 1,
              }}
              initial={{
                opacity: 0,
                transform: "translate(20px, 0)",
              }}
              animate={{ opacity: 1, transform: "translate(0, 0)" }}
              className="action-btns flex gap-3 items-center mt-8 max-md:text-[14px]"
            >
              {actionBtns.map((ele, index) => (
                <button
                  type="button"
                  key={index}
                  className={`rounded-md cursor-pointer transition-all p-3 font-bold border-2 border-solid ${
                    ele.favourite
                      ? "bg-white text-[#E2AE63] border-white hover:border-[#E2AE63] hover:bg-[#E2AE63] hover:text-white"
                      : " text-black bg-[#E2AE63] px-7 border-[#E2AE63] hover:bg-transparent hover:text-white"
                  } `}
                >
                  {ele.favourite ? ele.icon : ele.text}
                </button>
              ))}
            </motion.div>
          </div>
          <div className="card-group flex max-lg:flex-col items-center gap-3 text-center mt-8">
            {cardsDetails.map((ele, index) => (
              <motion.div
                transition={{
                  duration: 0.5,
                  delay: 2,
                }}
                initial={{
                  opacity: 0,
                  transform: "translate(10px, 0)",
                }}
                animate={{ opacity: 1, transform: "translate(0, 0)" }}
                className="card w-[80px] h-[80px] max-md:w-[55px] max-md:h-[55px] bg-white rounded-md flex items-center justify-center flex-col"
                key={index}
              >
                <span className="text-[#E2AE63] font-bold text-[20px] max-md:text-[16px]">
                  {ele.count}
                </span>
                <span className="text-[14px] max-md:text-[12px] font-light">
                  {ele.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="left lg:mr-6">
          <div className="card-content grid gap-4 w-[100%]">
            <motion.div
              transition={{
                duration: duration,
                delay: 1.5,
              }}
              initial={{
                opacity: 0,
                transform: "translate(-20px, 0)",
              }}
              animate={{ opacity: 1, transform: "translate(0, 0)" }}
              className="card w-full max-lg:my-5 max-lg:rounded-[0] p-8 rounded-lg backdrop-blur-xs bg-linear-to-r from-[#ffffff2a] to-[#e2ad636f]"
            >
              <h3 className="text-[#E2AE63] font-bold mb-2">عن الفعاليه</h3>
              <p className="text-white leading-[1.5] text-[24px] max-lg:text-[18px]">
                انطلاقاً من أهداف رؤيـة المملكـة العربيـة السعوديـة 2030 في
                تعظيم أثـر القطــاع غيـر الربحـي فـي التنمية وتمكين منظمات
                القطاع للقيام بأدوارها التنمويـة وزيـادة مساهمتها فـي الناتـج
                المحلي الإجمالي
              </p>
            </motion.div>
            <div className="card-group grid gap-4 lg:grid-cols-2 max-lg:px-4 max-lg:absolute max-lg:bottom-[-100px] max-lg:left-2/4 max-lg:-translate-x-2/4 max-md:w-[360px]">
              {leftSideCards.map((ele, index) => (
                <motion.div
                  transition={{
                    duration: duration,
                    delay: 2,
                  }}
                  initial={{
                    opacity: 0,
                    transform: "translate(-20px, 0)",
                  }}
                  animate={{ opacity: 1, transform: "translate(0, 0)" }}
                  className={`card rounded-lg overflow-hidden h-[210px] flex items-center justify-center ${
                    index == 1 && "max-lg:hidden"
                  }`}
                  key={index}
                >
                  <Image
                    src={ele.url}
                    alt="Card Image"
                    width={400}
                    height={400}
                    className="object-cover h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
