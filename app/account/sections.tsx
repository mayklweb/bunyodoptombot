// Replace each with your real content

import Image from "next/image";
import { PlusIcon } from "../shared/icons";

export function MyShop() {
  return <h1 className="text-2xl font-semibold">Mening duko'nim</h1>;
}

export function MyOrders() {
  return <h1 className="text-2xl font-semibold">Mening buyurtmalarim</h1>;
}

export function Addresses() {
  return (
    <div className="w-full h-full">
      <div className="hidden lg:block lg:mb-3">
        <h1 className="text-2xl font-semibold">Manzillar</h1>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-76 h-full flex flex-col items-center justify-center">
          <div>
            <Image width={200} height={200} src="/location.svg" alt="" />
          </div>
          <div className="mt-5 flex flex-col items-center gap-2">
          <h3 className="text-2xl font-semibold">Manzil mavjud emas</h3>
          <p className="text-gray-500 text-center">Hozircha sizda manzil mavjud emas manzil qo’shish uchun “Manzil qo’shish”ni bosing</p>
          <button className="mt-2.5 px-6 py-3 text-white font-normal flex gap-3 items-center bg-primary rounded-xl">
            <span><PlusIcon className="text-white w-5 h-5" /></span>
            <span >Manzil qo’shish</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Favorites() {
  return <h1 className="text-2xl font-semibold">Sevimli mahsulotlar</h1>;
}

export function About() {
  return <h1 className="text-2xl font-semibold">Biz haqimizda</h1>;
}
