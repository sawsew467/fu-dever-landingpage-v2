"use client";
import Card from "./Card";
import { useState } from "react";

interface pageProps {
  page: number;
  totalPages: number;
}

const initialListProjects = [{}, {}];

function List({ listProjects = initialListProjects }: any) {
  const [page, setPage] = useState<pageProps["page"]>(1);

  const getTotalPage = (value: string): number => {
    return 1;
  };

  const onChangePage = (value: number): void => {
    setPage(value);
  };

  return (
    <div className="sm:space-y-[12px] md:space-y-[20px] xl:space-y-[24px] ">
      <div className="w-[100%] flex sm:flex-col md:flex-row sm:gap-[20px] md:gap-[12px] lg:gap-[20px] xl:gap-[32px] justify-start flex-wrap ">
        {listProjects?.map((items: any) => (
          <Card
            key={items?._id}
            _id={items?._id}
            category={items?.category}
            postTime={items?.createdAt}
            tiltle={items?.title}
            depcription={items?.subTitle}
            image={items?.image}
            slug={items?.slug}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default List;
