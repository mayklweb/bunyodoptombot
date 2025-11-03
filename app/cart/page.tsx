"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { cartStore } from "@/app/store/CartStore";

function Cart() {
  // const [cart, setCart] = useState(
  //   cartStore.cart.map((item) => ({
  //     ...item,
  //     selected: true, // qo‘shimcha maydon
  //   }))
  // );

  // const [selectAll, setSelectAll] = useState(true);

  // // --- Select All toggle ---
  // const handleSelectAll = () => {
  //   const newValue = !selectAll;
  //   setSelectAll(newValue);
  //   setCart((prev) => prev.map((item) => ({ ...item, selected: newValue })));
  // };

  // // --- Select One toggle ---
  // const handleSelectItem = (id: number) => {
  //   setCart((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, selected: !item.selected } : item
  //     )
  //   );
  // };

  // // --- Delete Item ---``````````
  // const handleDelete = (id) => {
  //   cartStore.remove(id);
  // };

  // // --- Delete Selected Items ---
  // const handleDeleteSelected = () => {
  //   setCart((prev) => prev.filter((item) => !item.selected));
  //   setSelectAll(false);
  // };

  // // --- Calculation (selected items) ---
  // const totalPrice = cart
  //   .filter((item) => item.selected)
  //   .reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <section className="">
      <h1 className="text-2xl font-semibold mb-4">SAVAT</h1>
      <div className="flex flex-col mt-4 gap-6">
        <div className="w-full">
          <div className="w-full rounded-[10px] bg-[#CECFFF] p-3 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                // checked={selectAll}
                // onChange={handleSelectAll}
                className="w-5 h-5 rounded-[5px]"
              />
              <span className="text-sm lg:text-lg font-semibold text-[#0d0d2d] ml-2">
                Barcha mavjud mahsulotlarni tanlash
              </span>
            </div>
          </div>

          {/* <div className="w-full mx-auto mt-4 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="w-full bg-[#e5e6ff] p-4 lg:p-5 rounded-[10px] flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelectItem(item.id)}
                  className="w-5 h-5 rounded-[5px] sm:mt-4"
                />

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <div className="rounded-lg bg-white w-full sm:w-[140px] h-40 sm:h-[120px] flex items-center justify-center overflow-hidden">
                    <img
                      src={`http://localhost:4000${item.images[0].url}`}
                      crossOrigin="anonymous"
                      alt="product"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Details
                  <div className="flex flex-col justify-between gap-3 flex-1">
                    <h1 className="text-lg lg:text-2xl font-medium">
                      {item.name}
                    </h1>

                    <div className="flex justify-between">
                      <p className="text-sm lg:text-lg">
                        Narxi: {item.price.toLocaleString()} UZS
                      </p>
                      <p className="text-sm lg:text-lg">
                        Jami: {(item.price * item.count).toLocaleString()} UZS
                      </p>
                    </div>

                    <div className="flex gap-3 items-center">
                      <div className="inline-flex gap-4 border rounded-lg px-3 py-2 items-center">
                        <button onClick={() => handleDecrease(item.id)}>
                          <MinusIcon className="w-4 h-4" />
                        </button>
                        <p>{item.count}</p>
                        <button onClick={() => cartStore.inc(item.id)}>
                          <PlusIcon className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => cartStore.remove(item.id)}
                        className="border p-3 rounded-lg flex items-center"
                      >
                        <Trash2Icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {cart.length === 0 && (
              <p className="text-center text-gray-500">Savat bo‘sh 🙁</p>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Cart;
