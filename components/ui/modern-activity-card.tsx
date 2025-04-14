import Image from "next/image"
import { FaRegHeart } from "react-icons/fa";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Data = {
  type: string,
  title: string,
  date: string,
  imgurl: string,
}

export default function ModernActivityCard({ data } : { data: Data }) {
  const duration = 0.2;
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  return (
    <motion.div
      ref={ref}
      transition={{
        delay: 0.1,
        duration: duration,
      }}
      initial={{
        opacity: 0,
        transform: "translate(20px, 0)",
      }}
      animate={isInView ? { opacity: 1, transform: "translate(0, 0)" } : {}}

      className="card relative shadow-md rounded-md overflow-hidden">
      <div className="user-actions p-2 absolute top-0 left-0 w-full flex items-center justify-between">
        <div className="activity-type bg-[#E2AE63] px-3 font-bold text-neutral-950 shadow-md rounded-full py-1">
          <span>{data.type}</span>
        </div>
        <div className="add-to-favourites cursor-pointer w-[40px] h-[40px] flex items-center justify-center bg-neutral-950 text-[#E2AE63] rounded-md">
          <FaRegHeart size={18} />
        </div>
      </div>
      <div className="activity-img w-full aspect-[4/3]">
        <Image src={data.imgurl} alt="Acitivity" className="w-full h-full object-cover rounded-t-md" width={"400"} height={"400"} />
      </div>
      <div className="acitivity-content w-full h-full p-4 bg-neutral-950">
        <h3 className="title text-[#E2AE63] font-semibold mb-0.5">{data.title}</h3>
        <span className="date text-neutral-400 font-bold">{data.date}</span>
      </div>
    </motion.div>
  )
}