import React from "react";

import Banner from "@components/modules/Project/Banner";
import Projects from "@components/modules/Project/Projects";

const Main = ({ data }: any) => {
  return (
    <>
      <Banner></Banner>
      <Projects data={data}></Projects>
    </>
  );
};

export default Main;
