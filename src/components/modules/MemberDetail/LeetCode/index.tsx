import SectionTittle from "@components/core/common/SectionTitle";
import moment from "moment";
import Link from "next/link";
import React from "react";
import "moment/locale/vi";

const LEETCODE_URL = "https://leetcode.com/problems/{id}/description";

const LeetCode = ({ submissionList }: any) => {
  return (
    <div className="w-full flex flex-col lg:p-[40px] sm:p-[20px]  shadow-[0_2px_8px_0_#00000040] lg:gap-[30px] sm:gap-[20px]">
      <SectionTittle textPosition="left" title="Leet code" size="sm" />
      <ul className="w-full flex flex-col gap-[20px]">
        {submissionList?.length && submissionList != 0 ? (
          <>
            {submissionList?.map((infor: any) => (
              <li
                className=" lg:p-[20px_40px] md:p-[10px_20px] p-[15px_30px] shadow-[0_2px_4px_0_#00000040] rounded-[16px] cursor-pointer hover:bg-[#7dd6ff] transition-all"
                key={infor?._id}
              >
                <Link
                  href={LEETCODE_URL?.replace("{id}", infor?.titleSlug)}
                  className="flex items-center justify-between gap-[20px]"
                  target="_blank"
                >
                  <h2 className="truncate lg:text-[20px] md:text-[14px]">{infor?.title}</h2>
                  <p className="lg:text-[16px] md:text-[12px]">
                    {moment(new Date(infor?.timestamp * 1000))?.format("L")}
                  </p>
                </Link>
              </li>
            ))}
          </>
        ) : (
          <p>Chưa ghi nhận được bài làm</p>
        )}
      </ul>
    </div>
  );
};

export default LeetCode;
