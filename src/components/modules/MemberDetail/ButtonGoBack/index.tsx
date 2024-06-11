"use client";
import Image from "next/image";
import React from "react";

import arrowRight from "@icons/pages/project/arrowRight.svg";
import { useRouter } from "next-nprogress-bar";

type Props = {
  firstname?: string;
  lastname?: string;
};

const ButtonGoBack = ({ firstname, lastname }: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
    >
      <div className="hover:xl:pl-[50px] hover:lg:pl-[40px] hover:md:pl-[30px] hover:sm:pl-[20px] transition-all relative group xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[20px] font-bold flex gap-[10px]">
        <span className="aspect-square xl:w-[50px] lg:w-[40px] md:w-[30px] sm:w-[20px] transition-all h-full flex justify-center items-center absolute opacity-0 left-10 rotate-[180deg] group-hover:left-0 group-hover:opacity-100">
          <Image
            src={arrowRight}
            alt="icons"
            width={50}
            height={50}
            className="w-full h-full"
          />
        </span>
        <p>Hồ sơ của</p>
        <h2 className="text-[#0098FF] ">
          {firstname || lastname
            ? `${firstname ?? ""} ${lastname ?? ""}`
            : "Chưa có tông tin tên"}
        </h2>
      </div>
    </button>
  );
};

export default ButtonGoBack;
