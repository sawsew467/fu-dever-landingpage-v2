import React from "react";
import banner from "@images/pages/activity/banner/banner1.png";
import Image from "next/image";
import facebook from "@icons/pages/activity/banner/facebook.svg";
function Banner() {
  return (
    <>
      <section className="w-full  flex justify-center items-center relative">
        <div className="xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[600px] w-full h-full sm:px-[20px] md:px-[40px] xl:px-[80px] flex flex-col justify-center items-center ">
          <div className="w-full flex flex-row lg:justify-between justify-center items-center mt-[120px] sm:mb-[40px] md:mb-[60px] lg:mb-[45px]">
            <p className="max-w-[266px] w-full font-normal italic text-sm hidden lg:block leading-[17px] text-[#0098FF]">
              Hãy tham gia cùng chúng tôi, nơi mỗi tuần diễn ra những hoạt động
              hấp dẫn. Học hỏi, chia sẻ kinh nghiệm, và phát triển kỹ năng cùng
              những người đam mê công nghệ. Cùng nhau, chúng ta sẽ tạo ra những
              dự án tuyệt vời và mở khóa tiềm năng của bạn!!
            </p>
            <div className=" flex flex-col items-center justify-center">
              <p className="font-black md:text-[32px] md:leading-[39px] text-[30px] leading-[36px] mb-[12px] stroke-text ">
                Hoạt động ở
              </p>
              <p className="uppercase font-black md:text-[40px] md:leading-[48px] text-[38px] leading-[46px] text-[#0098FF]">
                {" "}
                fu-dever club
              </p>
            </div>
            <div className=" flex-row items-center justify-center hidden lg:flex gap-[20px]">
              <p
                style={{ shapeOutside: "circle(50%)" }}
                className="font-black text-right text-[24px] leading-[29px] text-[#0098FF] opacity-50 max-w-[80px] w-full"
              >
                Theo dõi chúng tôi
              </p>
              <a
                href="https://www.facebook.com/FPTUDever"
                target="_blank"
                className="rounded-full overflow-hidden"
              >
                <Image
                  loading="lazy"
                  className="w-full h-full rounded-full"
                  src={facebook}
                  alt="facebookIcon"
                ></Image>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              loading="lazy"
              className="w-4/5"
              src={banner}
              alt="bannerImg"
            ></Image>
          </div>
        </div>
        <div className="absolute z-10 bottom-0 w-full lg:h-44 md:h-40 sm:h-32 bg-gradient-to-t from-[#F8FCFF]" />
      </section>
    </>
  );
}

export default Banner;
