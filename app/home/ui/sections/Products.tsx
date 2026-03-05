import Image from "next/image";

const products = [
  {
    id: 1,
    name: "ВЕЧЕРНИ ОГНИ МОЛОЧНИ 3 КГ",
    price: "30700.00 USZ",
  },
  {
    id: 2,
    name: "ВЕЧЕРНИ ОГНИ МОЛОЧНИ 3 КГ",
    price: "30700.00 USZ",
  },
  {
    id: 3,
    name: "ВЕЧЕРНИ ОГНИ МОЛОЧНИ 3 КГ",
    price: "30700.00 USZ",
  },
  {
    id: 4,
    name: "ВЕЧЕРНИ ОГНИ МОЛОЧНИ 3 КГ",
    price: "30700.00 USZ",
  },
  {
    id: 5,
    name: "ВЕЧЕРНИ ОГНИ МОЛОЧНИ 3 КГ",
    price: "30700.00 USZ",
  },
  {
    id: 6,
    name: "ВЕЧЕРНИ ОГНИ МОЛОЧНИ 3 КГ",
    price: "30700.00 USZ",
  },
  {
    id: 7,
    name: "ВЕЧЕРНИ ОГНИ МОЛОЧНИ 3 КГ",
    price: "30700.00 USZ",
  },
  {
    id: 8,
    name: "ВЕЧЕРНИ ОГНИ МОЛОЧНИ 3 КГ",
    price: "30700.00 USZ",
  },
];

function Products() {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="text-xl font-semibold">Sizga yoqadiganlar</h1>
          <header className="flex items-center justify-between w-full bg-white">
            <h1 className=" font-medium text-black text-lg tracking-[-0.72px] leading-[18px] whitespace-nowrap">
              Mahsulotlar: Konfetlar
            </h1>

            <div className="flex items-center gap-4">
              <button className="px-5 py-2.5 bg-[#d4b6b6] rounded-lg border-black font-medium text-black text-sm tracking-tight leading-3">
                Saralash
              </button>

              <button className="px-5 py-2.5 bg-[#d4b6b6] rounded-lg border-black font-medium text-black text-sm tracking-tight leading-3">
                FIlter
              </button>
            </div>
          </header>
          <div className="mt-6 mb-10 grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-start gap-5 border-0 shadow-none"
              >
                <div className="p-0 w-full">
                  <div className="w-full h-32 bg-[#8c8c8c] rounded-[10px] mb-2.5" />

                  <div className="flex flex-col items-start gap-0.5 w-full">
                    <h2 className="w-full font-semibold text-black text-[14px] tracking-tight leading-[100%] truncate ">
                      {product.name}
                    </h2>

                    <p className="font-semibold text-[#000000cc] text-[14px] tracking-tight">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-16">
            <button className="mb-24 w-full h-full text-white text-xl cursor-pointer bg-[#2e3192] rounded-2xl">
              KOPROQ KORISH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
