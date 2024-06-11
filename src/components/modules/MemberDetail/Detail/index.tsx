import Link from "next/link";

import Profile from "../Profile";
import CardInfor from "../CardInfor";
import AboutMe from "../Aboutme";
import LeetCode from "../LeetCode";

import arrowRight from "@icons/pages/project/arrowRight.svg";
import Image from "next/image";
const initialUser = {
  _id: "awdawdawdawd",
  email: null,
  description: null,
  avatar:
    "https://aiartshop.com/cdn/shop/files/cute-anime-waifu-1-ai-artwork-913.webp?v=1707052300",
  nickname: null,
  phone: null,
  firstname: null,
  lastname: null,
  dob: null,
  hometown: null,
  positionId: {
    _id: null,
    name: null,
    constant: null,
    createdAt: null,
    updatedAt: null,
    __v: 0,
  },
  departments: [],
  job: null,
  workplace: null,
  school: null,
  majorId: {
    _id: null,
    name: null,
    constant: null,
    createdAt: null,
    updatedAt: null,
    __v: 0,
  },
  gen: 2,
  favourites: [],
  skills: [],
  isExcellent: false,
  isAdmin: null,
  MSSV: null,
  createdAt: null,
  updatedAt: null,
  __v: 0,
  socials: [],
  slug: null,
};
const DetailMember = ({ user = initialUser }: any) => {
  return (
    <main className="p-[80px] xl:px-[80px] md:px-[40px] sm:px-[20px]  min-h-[500px]  max-w-[1440px] mx-auto">
      <div className="flex w-full justify-between lg:mb-[60px] sm:mb-[20px] items-center flex-wrap gap-[10px]">
        <Link href="/member">
          <div className="hover:xl:pl-[50px] hover:lg:pl-[40px] hover:md:pl-[30px] hover:sm:pl-[20px] transition-all relative group xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[20px] font-bold flex gap-[10px]">
            <span className="aspect-square xl:w-[50px] lg:w-[40px] md:w-[30px] sm:w-[20px] transition-all h-full flex justify-center items-center absolute opacity-0 left-10 rotate-[180deg] group-hover:left-0 group-hover:opacity-100">
              <Image
                src={arrowRight}
                alt="icons"
                width={50}
                height={50}
                className="w-full h-full"
              />
            </span>
            <p>Hồ sơ của</p>
            <h2 className="text-[#0098FF] ">
              {user?.firstname || user?.lastname
                ? `${user?.firstname ?? ""} ${user?.lastname ?? ""}`
                : "Chưa có tông tin tên"}
            </h2>
          </div>
        </Link>
      </div>
      <div className="w-full grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 md:grid-rows-2 lg:flex-row sm:flex-col lg:gap-[40px] sm:gap-[20px] justify-center ">
        <div className="lg:col-span-1 md:col-span-2 h-full flex lg:flex-col md:flex-row sm:flex-col lg:gap-[40px] sm:gap-[20px] w-full items-stretch">
          <Profile user={user} />
        </div>
        <div className="flex lg:hidden md:flex-col lg:gap-[40px] sm:gap-[20px] h-fit w-full ">
          <CardInfor
            data={user?.skills}
            title="kĩ năng:"
            backgroundColor="#DEF7EC"
            color="#03543F"
          />
          <CardInfor
            data={user?.favourites}
            title="Sở thích:"
            backgroundColor="#EDEBFE"
            color="#5521B5"
          />
          <div className="md:flex lg:hidden sm:hidden flex-col lg:gap-[40px] sm:gap-[20px] w-full xl:min-w-[600px]">
            <LeetCode submissionList={user?.acSubmissionList} />
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 flex flex-col lg:gap-[40px] sm:gap-[20px] w-full lg:h-full sm:h-fit xl:min-w-[600px]">
          <AboutMe user={user} />
        </div>
        <div className="lg:flex hidden lg:flex-col lg:gap-[40px] sm:gap-[20px] h-fit w-full ">
          <CardInfor
            data={user?.skills}
            title="kĩ năng:"
            backgroundColor="#DEF7EC"
            color="#03543F"
          />
          <CardInfor
            data={user?.favourites}
            title="Sở thích:"
            backgroundColor="#EDEBFE"
            color="#5521B5"
          />
        </div>
        <div className="lg:flex md:hidden sm:flex flex-col lg:gap-[40px] sm:gap-[20px] w-full xl:min-w-[600px]">
          <LeetCode submissionList={user?.acSubmissionList} />
        </div>
      </div>
    </main>
  );
};

export default DetailMember;
