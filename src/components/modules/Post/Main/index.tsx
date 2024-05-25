import React from "react";
import Banner from "../Banner";
import Body from "../Body";

const Main = ({ project }: any) => {
  return (
    <div className="flex flex-col">
      <Banner
        tiltle={project?.title}
        image={project?.image}
        _id={project?._id}
        slug={project?.slug}
        postTime={project?.createdAt}
      ></Banner>
      <Body description={project?.description}></Body>
    </div>
  );
};

export default Main;
