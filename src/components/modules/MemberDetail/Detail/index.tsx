import Link from "next/link";

import Profile from "../Profile";
import CardInfor from "../CardInfor";
import AboutMe from "../Aboutme";
import LeetCode from "../LeetCode";


import ButtonGoBack from "../ButtonGoBack";
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
        <ButtonGoBack firstname={user?.firstname} lastname={user?.lastname}/>
      </div>
      <div className="w-full flex  lg:flex-row sm:flex-col lg:gap-[40px] sm:gap-[20px] justify-center ">
        <div className="flex lg:flex-col md:flex-row flex-col lg:w-1/2 w-full lg:gap-[40px] sm:gap-[20px]">
          <div className="h-fit flex lg:flex-col md:flex-row sm:flex-col lg:gap-[40px] sm:gap-[20px] lg:w-full md:w-1/2 w-full items-stretch">
            <Profile user={user} />
          </div>
          <div className="flex flex-col lg:gap-[40px] sm:gap-[20px] h-fit lg:w-full md:w-1/2 w-full">
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
        </div>
        <div className="flex lg:flex-col md:flex-row flex-col lg:w-1/2 w-full lg:gap-[40px] sm:gap-[20px]">
          <div className="lg:w-full md:w-[calc(50%-10px)] w-full">
            <AboutMe user={user} />
          </div>
          <div className="lg:w-full md:w-[calc(50%-10px)] w-full">
            <LeetCode submissionList={user?.acSubmissionList} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailMember;
