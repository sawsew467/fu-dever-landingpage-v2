"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Button = ({ href, icon, title }: any) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(href);
        router.refresh();
      }}
      className="flex lg:gap-[16px] md:gap-[14px] sm:gap-[10px] lg:px-[14px] sm:px-[12px] rounded-[10px] lg:min-w-[137px] md:min-w-[111px] lg:h-[57px] md:h-[48px] sm:h-[48px] items-center bg-primary"
    >
      <Image
        loading="lazy"
        src={icon}
        alt="go home"
        width={23}
        height={22}
        className="mt-[14px] mb-[18px] lg:w-[23px] h-[auto] md:w-[20px] sm:w-[18px] aspect-[23/22]"
      ></Image>
      <p className="font-[500] lg:text-[16px] sm:text-[12px] whitespace-nowrap text-[#fff] mt-[14px] mb-[16px]">
        {title}
      </p>
    </button>
  );
};

export default Button;
