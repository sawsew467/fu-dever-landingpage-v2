import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "@icons/pages/member/detail/facebook.svg";
import github from "@icons/pages/member/detail/github.svg";
import instagram from "@icons/pages/member/detail/instagram.svg";
import leetcode from "@icons/pages/member/detail/leetcode.svg";
import youtube from "@icons/pages/member/detail/youtube.svg";
const icon: any = {
  FACEBOOK: facebook,
  GITHUB: github,
  INSTAGRAM: instagram,
  LEETCODE: leetcode,
  YOUTUBE: youtube,
};
const Social = ({ socials }: any) => {
  return (
    <span className="flex gap-[16px] ">
      {socials?.length != 0 ? (
        <>
          {socials?.map((social: any) => (
            <Link href={social?.url} key={social?._id}>
              <Image
                className="aspect-square xl:w-[30px] md:w-[25px] sm:w-[20px]"
                src={icon[social?.socialId?.constant]}
                alt={`icon ${social?.name}`}
              ></Image>
            </Link>
          ))}
        </>
      ) : (
        <p>Không có</p>
      )}
    </span>
  );
};

export default Social;
