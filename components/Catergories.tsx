import { CategoriesCards } from "@/constants/categories";
import CategoryCard from "./ui/category-card";

export default function Categories() {
  
  return (
    <section className="categories p-6 container mx-auto">
      <div className="title mb-3 text-[24px] font-bold text-slate-800">التصنيفات</div>
      <div className="category-group grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
        { CategoriesCards.map((ele, index) => (
          <CategoryCard key={index} ele={ele} />
        )) }
      </div>
    </section>
  )
}