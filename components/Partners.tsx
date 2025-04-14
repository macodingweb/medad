import { PartnersLogos } from "@/constants/partners";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="partners my-6 scrollbar-hide overflow-x-scroll overflow-y-hidden container flex items-center mx-auto">
      <div className="content px-4 w-fit flex mx-auto justify-center items-center gap-5">
        { PartnersLogos.map((ele, index) => (
          <div className="partner w-[100px] h-[100px]" title={ele.title || "Unknown"} key={index}>
            <Image src={ele.imgUrl} alt={ele.title || "Unknown"} width={100} height={100} />
          </div>
        )) }
      </div>
    </section>
  )
}