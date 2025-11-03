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
  } = useQuery<CategoriesType[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  console.log(categories);

  return (
    <section>
      <div className="container">
        <div className="mt-6 mb-10 grid grid-cols-4 gap-2">
          {categories?.map(({ id, name }) => (
            <div
              key={id}
              className="bg-transparent rounded-xl flex items-center justify-center flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 bg-[#CECFFF] rounded-xl flex items-center justify-center">
                <Image
                  src="/logo1.svg"
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
