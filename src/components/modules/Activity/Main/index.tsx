import React, { useEffect, useState } from "react";
import Banner from "@components/modules/Activity/Banner";
import Activities from "@components/modules/Activity/Activities";

const Main = ({ data }: any) => {
  return (
    <>
      <Banner></Banner>
      <Activities data={data}></Activities>
    </>
  );
};

export default Main;
