"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

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
                  <div className="flex items-center gap-4 border border-[#cccccc] border-solid rounded-xl px-3 py-1.5">
                    <button>
                      <Minus />
                    </button>
                    <p>1</p>
                    <button>
                      <Plus />
                    </button>
                  </div>
                  <div>
                    <button>
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 border-t border-[#E0E0E0] border-solid py-3">
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
                  <div className="flex items-center gap-4 border border-[#cccccc] border-solid rounded-xl px-3 py-1.5">
                    <button>
                      <Minus />
                    </button>
                    <p>1</p>
                    <button>
                      <Plus />
                    </button>
                  </div>
                  <div>
                    <button>
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
