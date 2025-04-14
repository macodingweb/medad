import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 p-8 rounded-b-3xl relative">
      <div className="container mx-auto flex max-md:flex-col-reverse max-md:justify-center items-center justify-between">
        <div className="medad-footer-section flex flex-col justify-between max-md:flex-row max-md:items-center max-md:w-full max-md:mt-4 max-sm:flex-col max-sm:mt-8">
          <div className="logo w-[220px] h-[220px] max-md:h-auto max-sm:mb-8">
            <Image src={"/logo.png"} alt="logo" width={250} height={250} />
          </div>
          <div className="fast-links flex items-center gap-6 text-[#E2AE63]">
            <Link href={"/"} className="hover:underline">سياسه الخصوصيه</Link>
            <Link href={"/"} className="hover:underline">تواصل معنا</Link>
          </div>
        </div>
        <form className="contact-form w-[420px] max-md:w-full">
          <div className="form-group-inpts flex items-center gap-3 w-full mb-3">
            <div className="form-group flex-1/4">
              <input type="text" name="name" className="py-3 px-4 bg-[#ffffff61] text-white placeholder:text-white w-full outline-0 rounded-lg" placeholder="الاسم" />
            </div>
            <div className="form-group flex-3/4">
              <input type="email" name="email" className="py-3 px-4 bg-[#ffffff61] text-white placeholder:text-white w-full outline-0 rounded-lg" placeholder="البريد الالكتروني" />
            </div>
          </div>
          <div className="form-group">
            <textarea name="content" id="content" placeholder="النص" rows={6} className="py-3 px-4 resize-none bg-[#ffffff61] text-white placeholder:text-white w-full outline-0 rounded-lg"></textarea>
          </div>
          <input type="submit" value="إرسال" className="form-submit py-2 px-4 transition-all hover:bg-transparent hover:text-[#EA9300] border-2 border-solid border-[#EA9300] text-white rounded-md mt-3 bg-[#EA9300] mr-auto block cursor-pointer" />
        </form>
      </div>
    </footer>
  )
}