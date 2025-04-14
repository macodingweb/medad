"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

type Data = {
  iconUrl: string,
  title: string,
  desc: string,
}

export default function CategoryCard({ ele } : { ele: Data }) {
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
          
          className="category flex items-center gap-5 rounded-3xl p-5 bg-[#E2AE6352]">
            <div className="icon w-[100px] h-[100px]">
              <Image src={ele.iconUrl} alt="Icon" width={100} height={100} />
            </div>
            <div className="content h-full">
              <h3 className="title text-[20px] text-neutral-950 font-bold mb-1">{ele.title}</h3>
              <p className="desc text-neutral-900 font-semibold leading-[1.7] text-[15px]">{ele.desc}</p>
            </div>
          </motion.div>
  )
}