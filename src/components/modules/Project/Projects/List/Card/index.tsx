import React from "react";
import Image, { StaticImageData } from "next/image";
import ViewMoreButton from "../../../ViewMoreButton";
import Link from "next/link";
import moment from "moment";
import "moment/locale/vi";

function Card({
  _id,
  category,
  postTime,
  tiltle,
  depcription,
  image,
  slug,
  time,
}: any) {
  return (
    <div className="relative md:w-[32.17%] lg:w-[31.92%] xl:w-[31.65%] sm:h-[450px] md:h-[310px] lg:h-[405.30px] xl:h-[570px] flex-col   border border-solid  rounded-t-[6px]  rounded-b-[6px] ">
      <Link className="" href="/posts/[slug]" as={`project/${slug}`}>
        <div className="w-[100%] sm:h-[66.66%] md:h-[50%] xl:h-[52.8%] ">
          <Image
            loading="lazy"
            src={image}
            width={500}
            height={500}
            className="w-[100%] h-[100%] rounded-t-[6px] object-cover"
            alt="project image "
          ></Image>
        </div>
        <div className="w-[100%] sm:h-[33.34%] md:h-[50%] xl:h-[47.5%] sm:p-[10px_10px_20px_10px] md:p-[4px_4px_8px_4px] lg:p-[6px_6px_12px_6px] xl:p-[12px_12px_24px_12px] flex flex-col justify-between ">
          <div className="space-y-[8px]">
            <div className="flex space-x-[8px] items-center justify-between ">
              <div className="text-black sm:text-[8px] lg:text-[10px]  ">
                {moment(new Date(postTime), "YYYYMMDD").fromNow()}
              </div>
            </div>
            <div className="xl:space-y-[8px] lg:space-y-[4px] sm:text-[12px] md:text-[8px] lg:text-[12px]">
              <div className="text-black sm:text-[16px] md:text-[12px] lg:text-[16px] xl:text-[24px] xl:leading-[29px] line-clamp-2 xl:h-[60px]">
                {tiltle}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: depcription }}
                className=" text-black opacity-[60%] sm:text-[12px] md:text-[8px] lg:text-[12px] xl:text-[16px] sm:leading-[15px] md:leading-[20px] lg:line-clamp-3 md:line-clamp-2"
              ></div>
            </div>
          </div>

          <ViewMoreButton size="small" content={"Xem thêm"} />
        </div>
      </Link>
    </div>
  );
}

export default Card;
