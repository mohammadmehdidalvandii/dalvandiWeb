import Title from "@/components/modules/Title/Title";
import Link from "next/link";
import React from "react";

function Headline() {
  return (
    <section className="block w-full mt-24">
      <div className="block">
        <div className="block">
          <Title title="بیا ملاقات کنیم" />
        </div>
        <div className="block mt-8">
            <h1 className="block font-danaBlack text-7xl text-font-100 cursor-pointer duration-300 hover:text-white">
                <span className="block">محمد مهدی دالوندی</span>
                <span className="block mt-4">برنامه نویس فرانت اند هستم </span>
            </h1>
            <Link href='' className="flex items-center justify-center bg-font-100 w-[130px] h-12 mt-12 rounded-lg text-back font-extrabold text-xl ease-out duration-300 hover:bg-white">دانلود رزومه من</Link>
        </div>
      </div>
    </section>
  );
}

export default Headline;
