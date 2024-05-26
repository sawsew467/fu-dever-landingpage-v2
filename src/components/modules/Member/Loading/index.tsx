"use client";
const Index = ({ myRef }: any) => {
  return (
    <div ref={myRef} className="">
      <ul className=" xl:mt-[28px] w-[100%] md:mt-[40px] sm:mt-[20px] xl:gap-[40px] md:gap-[35px] sm:gap-[20px] flex-wrap flex justify-start">
        {Array(4)
          .fill(null)
          ?.map((user: any) => (
            <li
              key={user?._id}
              className="xl:w-[calc((100%-40px*3)/4)] lg:rounded-[20px_0] md:rounded-[15px_0] sm:rounded-[8px_0] overflow-hidden md:w-[calc((100%-35px*3)/4)]  xl:aspect-[29/40] lg:aspect-[7/10] md:aspect-[146/204]  sm:aspect-[93/123] sm:w-[calc((100%-20px*1)/2)]  cursor-pointer  relative"
            >
              <div className="animate-pulse w-full h-full bg-slate-200"></div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Index;
