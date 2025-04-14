"use client";

import { moderActivities } from "@/constants/modern-activities";
import ModernActivityCard from "./ui/modern-activity-card";

export default function AllActivitiesRosnama() {
  return (
    <section className="modern-actions p-6 container mx-auto mb-12 max-md:mb-6">
      <div className="title mb-3 text-[24px] font-bold text-slate-800">كل الفعاليات</div>
      <div className="modern-actions-group gap-5 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        { moderActivities.map((ele, index) => (
          <ModernActivityCard key={index} data={ele} />
        )) }
      </div>
    </section>
  )
}