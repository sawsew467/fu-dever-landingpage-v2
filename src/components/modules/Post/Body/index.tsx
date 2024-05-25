import React from "react";
import Content from "./Content";
import Function from "./Function";

function Body({ _id, description }: any) {
  return (
    <div className="max-w-[1440px] w-full  mx-auto sm:px-[20px] md:px-[40px] xl:px-[80px] flex justify-between sm:flex-col-reverse lg:flex-row sm:mb-[20px] lg:mb-[40px] xl:mb-[80px] ">
      <div className="sm:w-[100%] lg:w-[80%] xl:w-[85%] ">
        <Content content={description}></Content>
      </div>

      <div className="lg:w-[10%] xl:w-[12.9%]">
        {/* <Function></Function> */}
      </div>
    </div>
  );
}

export default Body;
