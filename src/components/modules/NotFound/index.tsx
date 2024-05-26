"use client";
import React from "react";
import Link from "next/link";
import SectionTittle from "@components/core/common/SectionTitle";
import Image from "next/image";
import goHome from "@icons/pages/not-found/arrow-go-back-line.svg";
import logo404 from "@icons/pages/not-found/404.svg";
import send from "@icons/pages/not-found/send.svg";
import { useState, useRef } from "react";
import { useRouter } from "next-nprogress-bar";
import { ValueOf } from "next/dist/shared/lib/constants";
const postToServer = (text: any) => {
  // console.log("text", text);
};
const Not_found = () => {
  const input = useRef<HTMLParagraphElement | ValueOf<any>>(null);
  const [open, setOpen] = useState<boolean | undefined>(false);
  const router = useRouter();
  return (
    <article
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (
          !input.current.contains(event.target) &&
          input.current.innerText == ""
        )
          setOpen(false);
      }}
      className="max-w-[1440px] flex flex-col xl:gap-[28px] lg:gap-[40px] md:gap-[35px] sm:gap-[20px] mx-[auto] xl:px-[80px] md:px-[40px] sm:px-[20px] my-[120px]"
    >
      <div className="flex justify-between md:items-end sm:items-start md:flex-row sm:gap-[25px] md:gap-[20px] sm:flex-col ">
        <SectionTittle
          title="Không tìm thấy"
          subtitle="Ối! Có vẻ như bạn đã truy cập vào một liên kết xấu. Nếu bạn cho rằng đây là vấn đề với chúng tôi, vui lòng cho chúng tôi biết."
          textPosition="left"
        ></SectionTittle>
        <button
          onClick={() => {
            router.back();
          }}
          className="flex lg:gap-[16px] md:gap-[14px] sm:gap-[10px] lg:px-[14px] sm:px-[12px] rounded-[10px] lg:min-w-[137px] md:min-w-[111px] lg:h-[57px] md:h-[48px] sm:h-[48px] items-center bg-primary"
        >
          <Image
            loading="lazy"
            src={goHome}
            alt="go home"
            width={23}
            height={22}
            className="mt-[14px] mb-[18px] lg:w-[23px] h-[auto] md:w-[20px] sm:w-[18px] aspect-[23/22]"
          ></Image>
          <p className="font-[500] lg:text-[16px] sm:text-[12px] whitespace-nowrap text-[#fff] mt-[14px] mb-[16px]">
            Trở lại
          </p>
        </button>
      </div>
      <div className="flex flex-col items-center xl:gap-[28px] lg:gap-[40px] md:gap-[35px] sm:gap-[20px]">
        <div className="flex gap-[31.5px] justify-center">
          <Image
            loading="lazy"
            src={logo404}
            alt="logo"
            width={911}
            height={290}
          ></Image>
        </div>
        <div className="flex xl:gap-[40px] w-[100%] lg:gap-[30px] md:-[20px] sm:gap-[12px] items-end">
          <div className="relative w-[100%]  h-[auto] min-h-[128px] ">
            <div
              ref={input}
              onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.code == "Enter") {
                  postToServer(input.current.innerText);
                  input.current.innerText = "";
                  event.preventDefault();
                  setOpen(false);
                }
              }}
              onClick={() => setOpen(true)}
              contentEditable={true}
              className="z-[2] cursor-pointer text-[#000] font-[500] lg:text-[16px] md:text-[14px] sm:text-[12px] border-[#0098FF] border-[2px] rounded-[10px] absolute h-[auto] min-h-[128px] max-w-[100%] outline-0 md:p-[20px] sm:p-[15px] sm:pt-[30px] top-0 left-0 w-[100%] text-left "
            ></div>
            <p
              className={`z-[1] absolute left-[20px] ${
                open
                  ? "top-0 opacity-[0.55]"
                  : "md:top-[20px] sm:top-[30px] opacity-[1]"
              } font-[500] md:text-[16px] sm:text-[12px] transition-[top,opacity] duration-[0.5s] mr-[5px] text-[#0098FF]`}
            >
              Hãy gửi cho tôi phản hồi của bạn nếu bạn cho rằng đây là vấn đề
              của chúng tôi.
            </p>
          </div>
          <button
            onClick={() => {
              postToServer(input.current.innerText);
              input.current.innerText = "";
              setOpen(false);
            }}
            className="flex lg:gap-[16px] md:gap-[14px] sm:gap-[10px] lg:px-[14px] sm:px-[12px] rounded-[10px] lg:min-w-[111px] md:min-w-[102px] sm:min-w-[104px] lg:h-[57px] md:h-[48px] sm:h-[48px] items-center bg-primary"
          >
            <Image
              loading="lazy"
              src={send}
              alt="gui"
              width={27}
              height={23}
              className="lg:w-[27px] h-[auto] md:w-[25px] sm:w-[23px] aspect-[27/23]"
            ></Image>
            <p className="font-[500] lg:text-[16px] sm:text-[12px] text-[#fff]">
              Gửi
            </p>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Not_found;
