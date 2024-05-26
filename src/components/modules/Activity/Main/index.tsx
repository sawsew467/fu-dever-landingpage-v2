import React, { useEffect, useState } from "react";
import Banner from "@components/modules/Activity/Banner";
import Activities from "@components/modules/Activity/Activities";

const Main = ({ data, albums }: any) => {
  return (
    <>
      <Banner></Banner>
      <Activities data={data} albums={albums}></Activities>
    </>
  );
};

export default Main;
