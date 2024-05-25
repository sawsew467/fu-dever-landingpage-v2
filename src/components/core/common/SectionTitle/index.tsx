import React from "react";

interface TittlePros {
  title: string;
  subtitle?: string;
  textPosition: "right" | "left";
  size?: string;
}

function SectionTittle({ title, subtitle, textPosition, size }: TittlePros) {
  return (
    <div
      className={`h-fit w-fit flex`}
      style={{
        flexDirection: textPosition === "left" ? "row-reverse" : "row",
      }}
    >
      <div
        className={``}
        style={{
          textAlign: textPosition,
        }}
      >
        <h2
          className={`font-[700] ${
            size === "sm"
              ? "text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]"
              : "text-[24px] md:text-[24px] lg:text-[32px] xl:text-[40px]"
          } text-[#0098FF]`}
        >
          {title.toUpperCase()}
        </h2>
        <h3 className="font-[400] text-[16px] md:text-[16px] lg:text-[24px] xl:text-[28px] text-[#22181C] mt-[4px]">
          {subtitle}
        </h3>
      </div>
      <div
        className={`${size === "sm" ? "w-[8px]" : " w-[10px]"} bg-[#FF0000]`}
        style={{
          margin:
            textPosition === "left" ? "0px 10px 0px 0px" : "0px 0px 0px 10px",
        }}
      ></div>
    </div>
  );
}

export default SectionTittle;
