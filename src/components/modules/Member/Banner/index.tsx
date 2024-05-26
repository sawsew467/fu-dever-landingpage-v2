"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arrow from "@icons/pages/member/banner/arrow.svg";
import Sekeleton from "@/src/components/core/common/Sekeleton";
const parent: any = {
  show: {
    transition: {
      staggerChildren: 0.15,
      type: "spring",
      duration: 0.5,
      bounce: 0.8,
    },
  },
};
const child: any = {
  hidden: (index: number) => ({
    x: -20 * (index + 1),
    opacity: 0,
  }),
  show: {
    x: 0,
    opacity: 1,
  },
};
const initialData = Array(6).fill(null);

const TopTypical = ({ data = initialData }: { data: any }) => {
  return (
    <article className="xl:max-w-[1440px] mx-[auto]">
      <div className="xl:px-[80px] md:px-[40px] sm:px-[20px] flex flex-col text-center">
        <h1
          className="font-[800]  text-[#0098FF] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
       uppercase lg:text-[40px] md:text-[38px] sm:text-[24px] md:leading-[45.99px] sm:leading-[29.05px]  mx-[auto] not-italic backdrog-blur-[2px]
        "
        >
          TRONG FU - DEVER CÓ AI?
        </h1>
        <p className="text-[#0065A9] font-[700] not-italic lg:text-[20px] md:text-[16px] sm:text-[14px]  xl:mt-[28px] lg:mt-[25px] md:mt-[23px] sm:mt-[20px]">
          2024 - Những gương mặt tiêu biểu của câu lạc bộ
        </p>
        <motion.ul
          initial="hidden"
          whileInView={"show"}
          variants={parent}
          className="flex-wrap xl:content-normal md:justify-between md:flex-nowrap sm:flex-wrap sm:justify-center xl:gap-[40px] lg:gap-[34px] sm:gap-[20px] mx-0 content-center flex lg:mt-[40px] md:mt-[25px] sm:mt-[20px] w-[100%] item-center "
        >
          {data?.map((user: any, index: any) => (
            <motion.li
              custom={index}
              variants={child}
              key={index}
              className={`lg:w-[calc((100%-30px*4)/5)]  xl:aspect-[9/14]   lg:aspect-[129/200] md:w-[calc((100%-30px*2)/3)] md:aspect-[90/136] sm:w-[calc((100%-20px*2)/3)] sm:aspect-[65/95] `}
            >
              <Image
                loading="lazy"
                width={180}
                height={280}
                className="pointer-events-none object-cover  lg:rounded-tl-[20px] lg:rounded-br-[20px] md:rounded-tl-[10px] md:rounded-br-[10px] sm:rounded-tl-[5px] sm:rounded-br-[5px] w-[100%] h-[100%]  "
                alt={`${user?.firstname} ${user?.lastname} là một thanh viên tiêu biểu của dever`}
                src={user?.avatar}
              ></Image>
            </motion.li>
          ))}
        </motion.ul>
        <p className="lg:mt-[40px] md:mt-[25px] sm:mt-[20px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[#0065A9] not-italic font-[700] ">
          Mỗi thành viên là một phần nhỏ trong sự phát triển thành công của câu
          lạc bộ.
        </p>
        <div className="lg:mt-[12px] md:mt-[25px] sm:mt-[8px] mx-[auto] xl:w-[1115px] lg:w-[944px] md:w-[688px] sm:w-[320px] bg-[#0098FF] lg:h-[8px] md:h-[6px] sm:h-[4px] "></div>
        <Image
          loading="lazy"
          className="pointer-events-none md:w-[24px] lg:h-[40px] md:h-[36px] sm:w-[20px] sm:h-[28px] mx-[auto] lg:my-[12px] md:my-[8px] sm:my-[9px]"
          src={arrow}
          alt="{group1498 }"
          width={24}
          height={40}
        ></Image>
      </div>
    </article>
  );
};

export default TopTypical;
