"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { DeleteIcon, MinusIcon, PlusIcon } from "../shared/icons";

function Cart() {
  return (
    <section className="">
      <div className="w-full py-2 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
        <h1 className="text-xl font-medium text-center ">
          Tovarlar tanlanmagan
        </h1>
      </div>
      <div className="container">
        <div className="">
          <div>
            <button></button>
            <button>Hammasini tanlash</button>
          </div>

          <div>
            <div className="cart-item-delivery-info">
              <div className="cart-item-delivery-info-head">
                <span className="cart-item-delivery-info-stock-type">
                  Bunyod Optom yetkazib berishi 1-2 ish kun ichida
                </span>
              </div>
              <span className="cart-item-delivery-info-date"></span>
            </div>

            <div className="flex gap-3 border-t border-[#E0E0E0] border-solid py-3">
              <div className="rounded-2xl overflow-hidden w-[180px] h-[120px]">
                <Image
                  src="/cookie.webp"
                  alt="product"
                  width={180}
                  height={120}
                  priority
                />
              </div>
              <div className="flex flex-col flex-auto justify-between">
                <div>
                  <h3 className="text-xl font-medium">SNIKERS</h3>
                  <p className="text-lg">33 000 USZ</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3 border border-[#cccccc] border-solid rounded-xl ">
                    <button className="p-1.5">
                      <Minus />
                    </button>
                    <p>1</p>
                    <button className="p-1.5">
                      <Plus />
                    </button>
                  </div>
                  <div>
                    <button className="p-1.5">
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 flex gap-3 flex-col rounded-xl bg-accent">
              <div className="flex gap-2 items-start">
                <div className="ronuded-xl flex shrink-0">
                  <Image
                    className="rounded-xl"
                    width={160}
                    height={120}
                    src={"/candy.webp"}
                    alt="product"
                  />
                </div>
                <div>
                  
                </div>
                <div className="w-full flex flex-col justify-between truncate">
                  <div>
                    <p className="w-full truncate text-base font-medium">
                      ВЕЧЕРНИ ОГНИ МОЛОЧНИ 3 КГ
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <p>Kategory:</p>
                      <span></span>
                      <p>Pecheniyalar</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <p>Brend:</p>
                      <span></span>
                      <p>N'medov</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <p className="font-medium w-auto">30700.00 so’m</p>
                  </div>
                </div>
                <input className="flex shrink-0 w-5 h-5" type="checkbox" name="" id="" />
              </div>
              <div className="w-full h-0.5 bg-gray"></div>
              <div className="flex justify-end gap-4">
                <div className="flex gap-2 items-center border rounded-xl">
                  <button className="p-2">
                    <MinusIcon />
                  </button>
                  <span>1</span>
                  <button className="p-2">
                    <PlusIcon />
                  </button>
                </div>
                <button className="text-error font-medium px-4 py-2 flex gap-2 items-center bg-error-foreground rounded-xl">
                  <span>
                    <DeleteIcon />
                  </span>
                  <span>Yo'q qilish</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
