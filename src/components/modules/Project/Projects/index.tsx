import React from "react";
import SectionTittle from "@components/core/common/SectionTitle";
import List from "./List";
const Projects = ({ data }: any) => {
  return (
    <div
      id="projects"
      className="w-[100%] relative sm:mb-[20px] lg:mb-[40px] xl:mb-[60px] "
    >
      <div className="max-w-[1440px] w-[100%] mx-auto flex-row justify-between items-center sm:px-[20px] md:px-[40px] xl:px-[80px] sm:space-y-[20px] lg:space-y-[40px] xl:space-y-[60px] ">
        <SectionTittle
          title="DỰ ÁN"
          subtitle="Về quá trình hình thành và phát triển của chúng tôi"
          textPosition="left"
        ></SectionTittle>
        <div className="flex-col w-[100%] sm:space-y-[20px] lg:space-y-[40px] xl:space-y-[60px]">
          <List listProjects={data}></List>
        </div>
      </div>
    </div>
  );
};

export default Projects;
