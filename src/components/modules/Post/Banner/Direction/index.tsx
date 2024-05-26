import React from "react";
import Link from "next/link";
import arrowRight from "@icons/pages/project/arrowRightNonColor.svg";
import Image from "next/image";

function Direction({ currenPage }: any) {
  return (
    <>
      <div className="text-[14px] font-[400] leading-normal flex flex-row  align-center opacity-70 ">
        <Link href={`/`}>
          <div className="hover:text-primary">Trang chủ</div>
        </Link>
        <Image
          loading="lazy"
          className=""
          src={arrowRight}
          alt="right arrow"
        ></Image>
        <Link href={`/project`}>
          <div className="hover:text-primary">Dự án</div>
        </Link>
        <Image
          loading="lazy"
          className=""
          src={arrowRight}
          alt="right arrow"
        ></Image>
        <div className="font-[700]">{currenPage}</div>
      </div>
    </>
  );
}

export default Direction;
