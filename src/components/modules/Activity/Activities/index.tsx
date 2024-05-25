import Image from "next/image";
import React from "react";
import workshop from "@images/pages/activity/activities/workshop.jpg";
import training from "@images/pages/activity/activities/training.jpg";
import contest from "@images/pages/activity/activities/contest.jpg";
import SectionTitle from "@components/core/common/SectionTitle";
import Slider from "@components/modules/Activity/Slider";
import Album from "../Album";

function Activities({ data, album }: any) {
  const academicActivities = [
    {
      img: workshop,
      title: "Workshop",
      alt: "workshopImg",
      desc: "Mang lại cơ hội quý giá cho việc học tập thông qua thực hành trực tiếp",
    },
    {
      img: training,
      title: "Training",
      alt: "trainingImg",
      desc: "Đào tạo cung cấp kỹ năng cá nhân và kỹ năng chuyên môn",
    },
    {
      img: contest,
      title: "Contest",
      alt: "ContestImg",
      desc: "Thử thách bản với các cuộc thi nghẹt thở với những phần thưởng hấp dẫn",
    },
  ];

  return (
    <>
      <section className="w-full h-full flex flex-col justify-center items-center bg-[#F8FCFF]">
        <div className="max-w-[1440px] w-full h-full  flex flex-col justify-center items-center">
          <div className=" flex flex-col w-full xl:px-[80px] md:px-[40px] sm:px-[20px] md:py-[60px] sm:py-[40px]">
            <SectionTitle
              title="HỌC THUẬT"
              subtitle="Chia sẽ kiến thức, cạnh tranh lành mạnh"
              textPosition="left"
            ></SectionTitle>
            <div className="flex flex-col mt-[20px] md:flex-row md:gap-0 sm:gap-[30px] justify-between w-full ">
              {academicActivities.map((activity, i) => (
                <div
                  key={i}
                  className="flex xl:w-[calc((100%-80px)/3)] md:w-[calc((100%-40px)/3)] w-full flex-col items-center gap-4"
                >
                  <Image
                    loading="lazy"
                    src={activity.img}
                    alt={activity.alt}
                    className=" object-cover xl:w-[400px] xl:h-[320px] lg:w-[283px] lg:h-[252px] md:w-[200px]  md:h-[178px] sm:w-full sm:h-[270px]"
                  ></Image>
                  <div className="flex flex-col items-center max-w-[310px] w-full">
                    <p className="lg:text-[40px] text-[#0065A9] font-bold lg:leading-[48px] md:text-[24px] md:leading-[29px] sm:leading-[48px] sm:text-[40px] mb-2">
                      {activity.title}
                    </p>
                    <p className="leading-[19px] lg:max-w-[310px] md:max-w-[188px] sm:w-full text-[16px] font-light text-center">
                      {activity.desc}
                    </p>
                    {/* <button className=" flex gap-1 flex-row items-center lg:px-[32px] lg:py-2 md:px-[10px] md:py-1 px-[32px] py-2 bg-[#0098FF] rounded-[2px]">
                      <p className="font-normal text-[16px] leading-[24px] text-white">
                        View more
                      </p>
                      <Image loading="lazy" src={ArrowIcon} alt="arrowIcon"></Image>
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex flex-col justify-center items-center bg-[#fff]">
        <div className="max-w-[1440px]   w-full h-full  flex flex-col justify-center items-center">
          <div className=" flex flex-col w-full xl:px-[80px] md:px-[40px] sm:px-[20px] md:py-[60px] sm:py-[40px]">
            <SectionTitle
              title="NGOẠI KHÓA"
              subtitle="Không ngừng kết nối, phát triển vững bềnh"
              textPosition="left"
            ></SectionTitle>
            <Slider images={data?.images}></Slider>
          </div>
        </div>
      </section>
      {/* <Album albums={album} /> */}
    </>
  );
}

export default Activities;
