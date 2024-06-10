import Image from "next/image";

import leetcode from "@icons/pages/leaderBoard/leetcode.svg";
import crown from "@icons/pages/leaderBoard/crown.svg";
import avatar_default from "@images/pages/leaderBoard/avatar_default.png";
import Link from "next/link";
function LeaderboardModule({ leaderboardData }: { leaderboardData: any }) {
  const user1 = leaderboardData?.[0];
  const user2 = leaderboardData?.[1];
  const user3 = leaderboardData?.[2];
  return (
    <main className="min-h-[100vh] pt-14">
      <section className="flex flex-col items-center pt-14 pb-10">
        <h1
          className="text-center font-[800]  text-[#0098FF] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
       uppercase lg:text-[40px] md:text-[38px] sm:text-[24px] md:leading-[45.99px] sm:leading-[29.05px]  mx-[auto] not-italic backdrog-blur-[2px]
        "
        >
          CÁC THÀNH VIÊN DẪN ĐẦU CODING LEADERBOARD
        </h1>
        <p className="text-[#0065A9] font-[700] not-italic lg:text-[20px] md:text-[16px] sm:text-[14px]  xl:mt-[28px] lg:mt-[25px] md:mt-[23px] sm:mt-[20px]">
          SUMMER - 2024
        </p>
        <div className="flex mt-12 px-5 gap-4 lg:gap-20">
          <div className="flex flex-col lg:gap-12 gap-6 mt-20">
            <div className="relative">
              <Image
                loading="lazy"
                src={user2?.userId?.avatar ?? avatar_default}
                alt=""
                width={290}
                height={400}
                className="rounded-2xl border-4 border-primary h-[400px] w-[290px object-cover"
              />
              <span className="lg:w-16 lg:h-16 w-10 h-10 bg-primary flex justify-center items-center rounded-full lg:text-lg text-xs absolute left-1/2 lg:bottom-[-32px] bottom-[-20px] translate-x-[-50%]">
                2
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="lg:text-2xl text-base font-bold text-center">
                {user2?.userId
                  ? user2?.userId?.firstname + " " + user2?.userId?.lastname
                  : "Không có thông tin"}
              </p>
              <div className="flex gap-2 items-center">
                <Image
                  loading="lazy"
                  src={leetcode}
                  alt=""
                  width={20}
                  height={24}
                />
                <p className="lg:text-lg text-xs font-medium">
                  {user2?.acSubmissionList?.length * 10 || 0} pts
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:gap-12 gap-6">
            <div className="relative">
              <Image
                src={crown}
                loading="lazy"
                alt=""
                width={60}
                height={52}
                className="absolute lg:top-[-32px] top-[-24px] left-1/2 translate-x-[-50%] lg:w-[60px] lg:h-[52px] w-[40px] h-[34px]"
              />
              <Image
                loading="lazy"
                src={user1?.userId?.avatar ?? avatar_default}
                alt=""
                width={290}
                height={400}
                className="rounded-2xl border-4 border-primary"
              />
              <span className="lg:w-16 lg:h-16 w-10 h-10 bg-primary flex justify-center items-center rounded-full lg:text-lg text-xs absolute left-1/2 lg:bottom-[-32px] bottom-[-20px] translate-x-[-50%]">
                1
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="lg:text-2xl text-base font-bold text-center">
                {user1?.userId
                  ? user1?.userId?.firstname + " " + user1?.userId?.lastname
                  : "Không có thông tin"}
              </p>
              <div className="flex gap-2 items-center">
                <Image
                  loading="lazy"
                  src={leetcode}
                  alt=""
                  width={20}
                  height={24}
                />
                <p className="lg:text-lg text-xs font-medium">
                  {user1?.acSubmissionList?.length * 10 || 0} pts
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:gap-12 md:gap-6 sm:gap-4 mt-20">
            <div className="relative">
              <Image
                loading="lazy"
                src={user3?.userId?.avatar ?? avatar_default}
                alt=""
                width={290}
                height={400}
                className="rounded-2xl border-4 border-primary"
              />
              <span className="lg:w-16 lg:h-16 w-10 h-10 bg-primary flex justify-center items-center rounded-full lg:text-lg text-xs absolute left-1/2 lg:bottom-[-32px] bottom-[-20px] translate-x-[-50%]">
                3
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="lg:text-2xl text-base font-bold text-center">
                {user3?.userId
                  ? user3?.userId?.firstname + " " + user3?.userId?.lastname
                  : "Không có thông tin"}
              </p>
              <div className="flex gap-2 items-center">
                <Image
                  loading="lazy"
                  src={leetcode}
                  alt=""
                  width={20}
                  height={24}
                />
                <p className="lg:text-lg text-xs font-medium">
                  {user3?.acSubmissionList?.length * 10 || 0} pts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto w-full bg-[#F8FCFF] lg:px-20 px-5 py-10 flex flex-col gap-4">
        {leaderboardData?.map((user: any, index: number) => (
          <Link href={`/member/${user.userId._id}`} key={index}>
            <div className="cursor-pointer hover:bg-[#7dd6ff] transition-all w-full bg-white drop-shadow-md rounded-2xl lg:p-5 md:p-4 sm:p-3 flex items-center group ">
              <span className="block lg:w-24 w-10 text-center text-xs lg:text-lg">
                {index + 1}
              </span>
              <Image
                loading="lazy"
                src={user?.userId?.avatar ?? avatar_default}
                alt=""
                width={40}
                height={40}
                className="rounded-full w-10 h-10 object-cover mx-5"
              />
              <p className="text-xs lg:text-lg flex-1">
                {user?.userId
                  ? user?.userId?.firstname + " " + user?.userId?.lastname
                  : "Không có thông tin"}
              </p>
              <span className="hidden w-48 text-center text-xs lg:text-lg md:block ">
                {user?.leetcodeUsername}
              </span>
              <span className="block lg:w-24 w-20 text-center text-xs lg:text-lg">
                {user?.acSubmissionList?.length * 10} pts
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default LeaderboardModule;
