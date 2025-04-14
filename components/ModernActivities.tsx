"use client";

import { moderActivities } from "@/constants/modern-activities";
import ModernActivityCard from "./ui/modern-activity-card";
import { useState } from "react";

export default function ModernActivities() {
  const [ showMore, setShowMore ] = useState(4);

  return (
    <section className="modern-actions p-6 container mx-auto">
      <div className="title mb-3 text-[24px] font-bold text-slate-800">أحدث الفعاليات</div>
      <div className="modern-actions-group gap-5 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        { moderActivities.slice(0, showMore).map((ele, index) => (
          <ModernActivityCard key={index} data={ele} />
        )) }
      </div>
      { showMore < moderActivities.length && (
        <button type="button" onClick={() => setShowMore(showMore + 4)} className="show-more-activities py-3 px-5 bg-[#E2AE63] text-neutral-950 font-bold mt-6 mx-auto rounded-md block cursor-pointer transition-all hover:bg-transparent hover:text-[#E2AE63] border-2 border-solid border-[#E2AE63]">جميع الفعاليات</button>
      ) }
    </section>
  )
}