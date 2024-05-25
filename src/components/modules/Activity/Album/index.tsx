import SectionTittle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const Album = ({ albums }: any) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-[#F8FCFF] ">
      <div className="flex flex-col max-w-[1440px] mx-auto w-full xl:px-[80px] md:px-[40px] sm:px-[20px] md:py-[60px] sm:py-[40px] gap-[60px]">
        <SectionTittle
          title="Bộ sưu tập"
          subtitle="Không ngừng kết nối, phát triển vững bềnh"
          textPosition="left"
        />
        <ul className="flex gap-[20px] flex-wrap">
          {albums?.map((album: any) => (
            <li
              className="xl:w-[calc(100%-20px*2)/3] rounded-[16px] shadow-2xl "
              key={album._id}
            >
              <Image
                src={album?.imageList[0]}
                alt={album?.description}
                width={400}
                height={400}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Album;
