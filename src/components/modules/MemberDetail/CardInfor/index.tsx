import SectionTittle from "@components/core/common/SectionTitle";
import Image from "next/image";
import React from "react";

const Skill = ({ title, data, backgroundColor, color }: any) => {
  return (
    <div className="flex flex-col lg:p-[40px] sm:p-[20px] shadow-[0_2px_8px_0_#00000040] lg:gap-[40px] sm:gap-[20px] w-full ">
      <SectionTittle
        title={title}
        textPosition="left"
        size="sm"
      ></SectionTittle>
      <div className="flex gap-[8px] flex-wrap lg:w-auto md:w-full ">
        {data?.length != 0 ? (
          <>
            {data?.map((label: string) => (
              <span
                key={data.label}
                className={`flex flex-col rounded-[6px] xl:p-[2px_12px] md:p-[2px_10px] sm:p-[2px_4px] `}
                style={{ backgroundColor, color }}
              >
                <h2 className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[12px] font-semibold">
                  {label}
                </h2>
              </span>
            ))}
          </>
        ) : (
          <p>Không ghi nhận được kĩ năng cụ thể</p>
        )}
      </div>
    </div>
  );
};

export default Skill;
