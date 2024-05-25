"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

import image1 from "@images/pages/home/banner/image1.png";
import image2 from "@images/pages/home/banner/image2.png";
import image3 from "@images/pages/home/banner/image3.png";
import image4 from "@images/pages/home/banner/image4.png";
import retangle1 from "@icons/pages/home/banner/Rectangle_7.svg";
import retangle2 from "@icons/pages/home/banner/Rectangle_8.svg";
import retangle3 from "@icons/pages/home/banner/Rectangle_9.svg";
import retangle4 from "@icons/pages/home/banner/Rectangle_10.svg";
import retangle5 from "@icons/pages/home/banner/Rectangle_11.svg";
import retangle6 from "@icons/pages/home/banner/Rectangle_12.svg";
import retangle7 from "@icons/pages/home/banner/Rectangle_13.svg";

import "./style.css";

type obj = {
  x: number;
  y: number;
};

const animationTitle: any = {
  show: {
    scaleX: [1, 0.2],
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 3,
      delay: 0.5,
      repeat: "Infinity",
      repeatType: "reverse",
    },
  },
};

function Banner() {
  const [client, setClient] = useState<obj>({ x: 0, y: 0 });
  const ref = useRef<any>(null);
  return (
    <motion.section
      animate={{
        transition: {
          type: "spring",
        },
      }}
      ref={ref}
      onMouseMove={({ clientX, clientY }: React.MouseEvent) => {
        setClient(() => {
          const x =
            ((clientX - ref?.current?.clientWidth / 2) /
              ref.current.clientWidth) *
            100;
          const y =
            ((clientY - ref?.current?.clientHeight / 2) /
              ref.current.clientWidth) *
            100;
          return {
            x: x,
            y: y,
          };
        });
      }}
      className=" h-[421px] md:h-[573px] lg:h-[708px] xl:h-[810px] flex justify-center items-center "
    >
      <div className="max-w-[1440px] w-[100%] px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px] h-[100%] flex justify-center items-center">
        <div className="w-[310px] lg:w-[724px] xl:w-[724px] h-fit flex flex-col justify-center items-center xl:translate-y-[-40px] lg:translate-y-[-37px] md:translate-y-[32px] translate-y-[28px]">
          <h1
            className={`stroke-black relative text-[#0098FF] text-[32px] xl:text-[40px] flex justify-center items-center font-[700]  xl:leading-[48px] leading-[40px]`}
          >
            FU-DEVER
            <motion.span
              animate="show"
              variants={animationTitle}
              className="w-[120px] animate-line h-[5px] bg-[red] absolute top-[50px] xl:top-[54px]"
            ></motion.span>
          </h1>
          <h2
            className={`text-[#0098FF] text-[24px] xl:text-[32px] mt-[24px] font-[700] leading-[39px] `}
          >
            WORK HARD - PLAY HARD
          </h2>
          <p className="text-center text-[#22181C] font-[400] w-[310px] lg:w-[724px] xl:w-[724px] text-[16px] lg:text-[20px] xl:text-[20px] leading-[18px] lg:leading-[23px] xl:leading-[23px] mt-[12px]">
            Tham gia ngay câu lạc bộ của chúng tôi! <br></br>
            Kết nối với cộng đồng đam mê công nghệ.<br></br>
            Học hỏi không ngừng và khai phá tiềm năng. <br></br>
            Dù bạn là ai, sẽ luôn luôn có điều mới để khám phá và chinh phục!.
          </p>
          <button className="px-[24px] xl:px-[32px] py-[12px] xl:py-[16px] bg-[#0098FF] flex justify-center items-center mt-[20px]">
            <p className="font-[400] text-[12px] xl:text-[16px] text-white leading-[19px]">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/1zr-qtjxbWkFvV10AWEyRnlsdq2IzqqOrewaHWXKIuDQ/prefill"
                className="text-white decoration-none"
              >
                ĐĂNG KÝ NGAY
              </a>
            </p>
          </button>
        </div>
      </div>

      <motion.div className="max-w-[1440px] w-[100%]  h-[421px] md:h-[573px] lg:h-[708px] xl:h-[810px] px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px] hidden md:block lg:block xl:block absolute z-[-1]">
        <motion.div
          animate={{
            x: client.x,
            y: client.y,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="w-[240px] h-[258px] lg:w-[200px] lg:h-[240px] xl:w-[226px] xl:h-[272px] absolute bottom-[40px]"
        >
          <Image loading="lazy" src={image2} alt="person" />
        </motion.div>
        <motion.div
          animate={{
            x: client.x * -1,
            y: client.y * -1,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="w-[200px] h-[190px] lg:w-[210] lg:h-[260px] xl:w-[236px] xl:h-[333px] absolute right-[20px] md:right-[40px] lg:right-[40px] xl:right-[80px] bottom-[61px] lg:bottom-[44px] xl:bottom-[80px]"
        >
          <Image loading="lazy" src={image4} alt="person" />
        </motion.div>
        <motion.div
          animate={{
            x: client.x,
            y: client.y,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="w-[120px] h-[144px] xl:w-[133px] xl:h-[141px] absolute right-[120px] lg:right-[180px] xl:right-[328px] top-[116px] lg:top-[147px] xl:top-[132px]"
        >
          <Image loading="lazy" src={image3} alt="person" />
        </motion.div>
        <motion.div
          animate={{
            x: client.x * -1,
            y: client.y * -1,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="w-[134px] h-[138px] xl:w-[156px] xl:h-[148px] absolute xl:left-[256px] top-[96px] lg:top-[142px] xl:top-[120px] lg:left-[180px] left-[120px]"
        >
          <Image loading="lazy" src={image1} alt="person" />
        </motion.div>
      </motion.div>

      <motion.div className="max-w-[1440px] w-[100%] m-auto  h-[421px] md:h-[573px] lg:h-[708px] xl:h-[810px] absolute z-[-2] overflow-hidden">
        <motion.div
          animate={{
            x: client.x * -1,
            y: client.y * -1,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="absolute lg:top-[204px] xl:top-[335px] lg:left-[-90px] xl:left-[-70px] xl:w-auto xl:h-auto lg:w-auto lg:h-auto md:w-[68px] md:h-[111px] md:top-[216px] md:left-[-40px] hidden md:block lg:block xl:block"
        >
          <Image loading="lazy" src={retangle1} alt="Picture of the author" />
        </motion.div>
        <motion.div
          animate={{
            x: client.x,
            y: client.y,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="absolute lg:top-[312px] xl:top-[373px] lg:left-[110px] xl:left-[250px] xl:w-auto xl:h-auto lg:w-[23px] lg:h-[21px] hidden md:hidden xl:block lg:block"
        >
          <Image loading="lazy" src={retangle2} alt="Picture of the author" />
        </motion.div>
        <motion.div
          animate={{
            x: client.x * -1,
            y: client.y * -1,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="absolute xl:top-[277px] xl:right-[160px] xl:w-auto xl:h-auto lg:w-[45px] lg:h-[45px] lg:top-[297px] lg:right-[80px]  hidden md:hidden xl:block lg:block"
        >
          <Image loading="lazy" src={retangle3} alt="Picture of the author" />
        </motion.div>
        <motion.div
          animate={{
            x: client.x,
            y: client.y,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="absolute xl:top-[179px] xl:right-[-30px] xl:w-auto xl:h-auto lg:w-[61px] lg:h-[73px] lg:right-[-40px] lg:top-[114px] md:w-[61px] md:h-[73px] md:top-[246px] right-[-40px] hidden md:block lg:block xl:block"
        >
          <Image loading="lazy" src={retangle4} alt="Picture of the author" />
        </motion.div>
        <motion.div
          animate={{
            x: client.x * -1,
            y: client.y * -1,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="absolute xl:bottom-[91px] xl:right-[427px] lg:right-[340px] lg:bottom-[137px] hidden md:hidden xl:block lg:block"
        >
          <Image loading="lazy" src={retangle5} alt="Picture of the author" />
        </motion.div>
        <motion.div
          animate={{
            x: client.x,
            y: client.y,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="absolute xl:bottom-[147px] xl:left-[553px] xl:w-auto xl:h-auto lg:w-[31px] lg:h-[30px] lg:bottom-[159px] lg:left-[356px] md:bottom-[30px] md:left-[264px] bottom-[63px] right-[46px]"
        >
          <Image loading="lazy" src={retangle6} alt="Picture of the author" />
        </motion.div>
        <motion.div
          animate={{
            x: client.x * -1,
            y: client.y * -1,
          }}
          transition={{
            type: "lieaner",
            restDelta: 0.01,
          }}
          className="absolute xl:top-[108px] xl:right-[571px] xl:w-auto xl:h-auto lg:w-[33px] lg:h-[33px] lg:top-[142px] lg:right-[311px] md:top-[108px] md:right-[240px] top-[96px] left-[40px]"
        >
          <Image loading="lazy" src={retangle7} alt="Picture of the author" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
export default Banner;
