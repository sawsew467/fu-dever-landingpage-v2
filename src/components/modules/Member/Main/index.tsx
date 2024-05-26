import React from "react";
import Banner from "@components/modules/Member/Banner";
import ListLeaderMember from "@components/modules/Member/MemberLeader";
import ListMember from "@components/modules/Member/MemberNormal";

const Main = ({ leaderData, excellentData, memberData }: any) => {
  return (
    <>
      <div className=" xl:mt-[120px] lg:mt-[109px] sm:mt-[96px] max-w-[1440px] mx-auto">
        <Banner data={excellentData} />
        <section className="bg-[#FAFBFC] xl:px-[80px] md:px-[40px] sm:px-[20px] flex flex-col">
          <ListLeaderMember data={leaderData} />
          <ListMember member={memberData} />
        </section>
      </div>
    </>
  );
};

export default Main;
