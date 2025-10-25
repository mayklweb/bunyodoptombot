import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { CategoriesType } from "@/app/types";
import { getCategories } from "@/app/api/apiservices";

function Categories() {
  const {
    data: categories,
    isError,
    error,
    isLoading,
  } = useQuery<CategoriesType>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  console.log(categories);

  return (
    <section>
      <div className="container">
        <div className="mt-6 mb-10 grid grid-cols-4 gap-2 lg:gap-4">
          {categories?.map(({ id, name }) => (
            <div
              key={id}
              className="lg:bg-[#CECFFF] bg-transparent rounded-xl flex items-center justify-center flex-col lg:flex-row gap-1 lg:p-2 cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out"
            >
              <div className="p-2 bg-[#CECFFF] rounded-md flex items-center justify-center">
                <Image
                  src="/logo1.svg"
                  className="lg:p-1"
                  alt="categories"
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-sm lg:text-lg font-medium text-[#2e3192]">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
