"use client";
import SectionTittle from "@components/core/common/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Album = ({ albums }: any) => {
  return (
    <section className="overflow-hidden w-full h-full flex flex-col justify-center items-center bg-[#F8FCFF] ">
      <div
        id="album"
        className="flex flex-col max-w-[1440px] mx-auto w-full xl:px-[80px] md:px-[40px] sm:px-[20px] md:py-[60px] sm:py-[40px] gap-[60px] "
      >
        <SectionTittle
          title={"Bộ sưu tập"}
          subtitle={"Nơi các kĩ niệm của dever được lưu trữ"}
          textPosition="left"
        />
        <ul className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:gap-[100px] lg:gap-[80px] md:gap-[60px] sm:gap-[40px] flex-wrap xl:px-[80px] px-[40px]">
          {albums?.map((album: any, index: number) => {
            return (
              <li
                className="flex flex-col gap-[20px] relative w-full  items-center  "
                key={album?.title}
              >
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper shadow-2xl "
                  style={{
                    width: "100%",
                    margin: 0,
                    overflow: "visible",
                  }}
                >
                  {album?.imageList?.map((image: any, index: number) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={image?.url}
                        alt=""
                        width={400}
                        height={400}
                        className="w-full aspect-square object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Link
                  href="album/{slug}"
                  as={`activity/${album?.slug}`}
                  className="hover:underline hover:text-primary uppercase underline-offset-4 font-regular xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[16px]"
                >
                  {album?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Album;
