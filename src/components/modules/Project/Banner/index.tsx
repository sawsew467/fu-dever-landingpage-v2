"use client";
import React from "react";
import Image from "next/image";
import Background from "@images/pages/project/banner.png";
import Model from "@images/pages/project/model.png";
import { motion } from "framer-motion";
import "../../../../app/globals.css";
import Link from "next/link";

const parent: any = {
  show: {
    transition: {
      staggerChildren: 0.2,
      type: "spring",
      bounce: 0.8,
      duration: 4,
      repeat: Infinity,
      delay: 1,
    },
  },
};
const child: any = {
  show: (index: number) => ({
    y: index % 2 == 1 ? [20, 0] : [-20, 0],
    opacity: [0, 1],
    transition: {
      repeat: Infinity,
      repeatDelay: 4,
      repeatType: "reverse",
    },
  }),
};
const Blogs = () => {
  return (
    <div className="w-[100%] sm:h-[413px] md:h-[402px] lg:h-[471px] xl:h-[588px]  sm:mb-[40px] md:mb-[60px] lg:mb-[60px]  relative ">
      <Image
        loading="lazy"
        src={Background}
        alt="background effect"
        className="absolute w-[100%] h-[100%]  max-h-[588px] min-h-[350px] min-w-[360px]  object-cover	"
      ></Image>
      <div className="max-w-[1440px] w-[100%]  mx-auto md:px-[40px] xl:px-[80px]">
        <div className="relative sm:text-center md:text-left">
          <div className="absolute transform sm:w-[86.11%] md:w-[42%] sm:-translate-x-1/2 sm:left-1/2 md:left-0 md:-translate-x-0 sm:space-y-[2px] md:space-y-[12px] lg:space-y-[20px] sm:top-[106px] md:top-[176px] lg:top-[154px]  xl:top-[209px] left-0  ">
            <div className="md:space-y-[8px] xl:space-y-[12px]">
              <div className=" sm:text-[24px] lg:text-[32px] sm:leading-[29px] lg:leading-[39px] text-black stroke-text font-black ">
                KHÁM PHÁ VỀ
              </div>
              <div className=" sm:block md:hidden w-[120px] h-[4px] mt-[8px] mb-[12px] bg-highlight mx-auto "></div>
              <motion.div
                animate="show"
                variants={parent}
                className="overflow-hidden flex md:justify-start sm:justify-center relative w-[100%] h-[50px] sm:text-[32px] lg:text-[40px] font-black sm:leading-[39px] lg:leading-[48px] text-primary"
              >
                {[
                  "F",
                  "U",
                  "-",
                  "D",
                  "E",
                  "V",
                  "E",
                  "R",
                  " ",
                  "C",
                  "L",
                  "U",
                  "B",
                ].map((char: string, index: number) => (
                  <motion.p
                    key={index}
                    custom={index}
                    variants={child}
                    className={`${
                      char == " " ? "w-[0.5ch]" : ""
                    } max-h-[100%] whitespace-nowrap overflow-hidden`}
                  >
                    {char}
                  </motion.p>
                ))}
              </motion.div>
            </div>
            <div className="w-[100%] sm:text-[12px] lg:text-[16px] xl:text-[20px]  text-black  sm:leading-[15px] lg:leading-[19px] xl:leading-[24px] font-normal">
              <p>
                Hòa mình vào thế giới lập trình, giải quyết vấn đề và công nghệ
                với những người cùng chí hướng. Cho dù bạn là người mới bắt đầu
                hay một lập trình viên có kinh nghiệm. Hãy tham gia cùng chúng
                tôi và mở khóa tiềm năng vô hạn của lập trình!
              </p>
            </div>

            <div className="w-[100%]  absolute sm:top-[180px] md:top-[180px] lg:top-[220px] xl:top-[240px]">
              <div className="absolute bg-white sm:hidden md:block md:top-[10px] lg:top-[16px] md:w-[117px] lg:w-[167px] md:h-[31px] lg:h-[51px] xl:h-[56px] border-solid border-[3px] border-black "></div>
              <Link
                href="/project#projects"
                scroll={false}
                className="absolute active:left-0 duration-0 active:top-[16px] transition-all   sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-x-123 md:left-0 md:translate-x-0 lg:left-[-12px] xl:left-[-16px] text-white bg-primary sm:w-[123px] md:w-[117px] lg:w-[167px] sm:h-[39px] md:h-[31px] lg:h-[51px] xl:h-[56px]  md:py-[8px] lg:py-[16px] md:px-[20px] lg:px-[32px] md:text-[12px] lg:text-[16px] flex items-center justify-center  "
              >
                Xem dự án
              </Link>
            </div>
          </div>
          <Image
            loading="lazy"
            src={Model}
            alt="model dever blogs"
            className="absolute hidden md:block md:max-w-[350px] lg:max-w-[455px] xl:max-w-[640px] md:top-[152px] lg:top-[130px] xl:top-[120px] right-0 max-w-[50%]  "
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
