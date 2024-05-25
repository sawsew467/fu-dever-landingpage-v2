import React from "react";
import Image from "next/image";
import Aroww from "@icons/pages/project/arrowRight.svg";
interface viewMorePros {
  content: string;
  size: "small" | "big";
}

function ViewMoreButton({ content, size }: viewMorePros) {
  return (
    <div
      className={` hidden md:flex rounded-[6px] items-center space-x-[4px] border  border-solid border-primary text-primary justify-center
  ${
    size === "big"
      ? " md:text-[12px] lg:text-[16px] md:py-[8px] md:px-[8px] lg:px-[12px] xl:px-[32px] w-fit "
      : ""
  }
  ${
    size === "small"
      ? "md:text-[10px] lg:text-[12px] xl:text-[16px] md:py-[4px] lg:py-[6px] xl:py-[8px] md:px-[6px] lg:px-[18px] xl:px-[32px] w-fit "
      : ""
  }
  `}
    >
      <div className="">{content}</div>
      <Image loading="lazy" src={Aroww} alt="arrow icon" />
    </div>
  );
}

export default ViewMoreButton;
