"use client";
import React, { useEffect, useState } from "react";
import Logo from "@images/header/logo.svg";
import MenuLogo from "@images/header/menu.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import "./style.css";
import { useRouter, usePathname } from "next/navigation";
const animationHeader: any = {
  down: {
    y: [-60, 0],
    opacity: [0, 1],
    backgroundColor: "#fff",
    boxShadow: "0px 0px 20px 0px #2020204a",
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
  up: {
    y: 0,
    boxShadow: "none",
    scale: [1.2, 1],
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};
function Header() {
  const [isOpenMenu, setOpenMenu] = useState<Boolean>(false);
  const [isScrollHeader, setScrollHeader] = useState<Boolean>(false);
  const pathname = usePathname();
  const nav = pathname.split("/").at(1);
  const router = useRouter();

  const onClickMenuButton = () => {
    setOpenMenu((isOpenMenu) => !isOpenMenu);
  };

  const handleScroll = (e: any) => {
    setOpenMenu(false);
    const y = document.documentElement.scrollTop;
    if (y > 64) setScrollHeader(true);
    else setScrollHeader(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDirect = (url: string) => {
    router.push(url);
    router.refresh();
  };
  return (
    <motion.div
      animate={isScrollHeader ? "down" : "up"}
      variants={animationHeader}
      className="left-0 right-0 top-0 fixed z-[100] bg-white/[0.8] backdrop-blur-sm"
    >
      <div
        className={`max-w-[1440px] mx-auto h-[56px] lg:h-[64px] xl:h-[64px] flex justify-between items-center px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px]`}
      >
        <a href="/">
          <Image
            loading="lazy"
            src={Logo}
            alt="Picture of the author"
            className="w-auto h-auto"
          />
        </a>
        <div className={`hidden md:hidden lg:flex gap-[40px] text-[16px]`}>
          <button
            onClick={() => handleDirect("/")}
            className={`${
              nav === "" ? "text-primary " : null
            } hover:text-primary header transition-all relative`}
          >
            Trang chủ
            <span
              className={`${
                nav === "" ? "show" : null
              } absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
            <span
              className={`${nav === "" ? "show" : null}
            absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
          </button>
          <button
            onClick={() => handleDirect("/activity")}
            className={`${
              nav === "activity" ? "text-primary " : null
            } hover:text-primary header transition-all relative`}
          >
            Hoạt động
            <span
              className={`${
                nav === "activity" ? "show" : null
              } absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
            <span
              className={`${
                nav === "activity" ? "show" : null
              } absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
          </button>
          <button
            onClick={() => handleDirect("/project")}
            className={`${
              nav === "project" ? "text-primary " : null
            } hover:text-primary header transition-all relative`}
          >
            Dự án
            <span
              className={`${
                nav === "project" ? "show" : null
              } absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
            <span
              className={`${
                nav === "project" ? "show" : null
              } absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
          </button>
          <button
            onClick={() => handleDirect("/member")}
            className={`${
              nav === "member" ? "text-primary " : null
            } hover:text-primary header transition-all relative`}
          >
            Thành viên
            <span
              className={`${
                nav === "member" ? "show" : null
              } absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
            <span
              className={`${
                nav === "member" ? "show" : null
              } absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
          </button>
          <button
            onClick={() => handleDirect("/leaderboard")}
            className={`${
              nav === "leaderboard" ? "text-primary " : null
            } hover:text-primary header transition-all relative`}
          >
            Bảng xếp hạng
            <span
              className={`${
                nav === "leaderboard" ? "show" : null
              } absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
            <span
              className={`${
                nav === "leaderboard" ? "show" : null
              } absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span`}
            ></span>
          </button>
        </div>

        <Image
          loading="lazy"
          src={MenuLogo}
          alt="Menu Logo"
          className="block lg:hidden md:block cursor-pointer"
          onClick={onClickMenuButton}
        />
      </div>

      <div
        className={`${
          isOpenMenu ? "" : "pointer-events-none"
        } absolute flex h-fit top-[56px] w-[100%]  md:flex lg:hidden flex-col md:flex-col text-[16px] max-w-[1024px] opacity-0 rounded-b-xl overflow-hidden`}
        style={{
          opacity: "1",
          transition: "all 0.3s",
        }}
        onClick={() => setOpenMenu(false)}
      >
        <button
          onClick={() => handleDirect("/")}
          className="w-[100%] bg-primary/[0.8] active:bg-white/[0.8] active:text-primary text-center cursor-pointer transition-all py-[10px] text-white  hover:font-bold translate-y-[-20px]"
          style={{
            opacity: isOpenMenu ? "1" : "0",
            transition: "all 0.3s",
            visibility: isOpenMenu ? "visible" : "hidden",
            transform: isOpenMenu ? "translateY(0px)" : "translateY(-20px)",
            transitionDelay: "0.1s",
          }}
        >
          Trang chủ
        </button>
        <button
          onClick={() => handleDirect("/activity")}
          className="w-[100%] bg-primary/[0.8] active:bg-white/[0.8] active:text-primary text-center cursor-pointer transition-all py-[10px] text-white  hover:font-bold translate-y-[-20px]"
          style={{
            opacity: isOpenMenu ? "1" : "0",
            transition: "all 0.3s",
            visibility: isOpenMenu ? "visible" : "hidden",
            transform: isOpenMenu ? "translateY(0px)" : "translateY(-20px)",
            transitionDelay: "0.2s",
          }}
        >
          Hoạt động
        </button>
        <button
          onClick={() => handleDirect("/project")}
          className="w-[100%] bg-primary/[0.8] active:bg-white/[0.8] active:text-primary text-center cursor-pointer transition-all py-[10px] text-white  hover:font-bold translate-y-[-20px]"
          style={{
            opacity: isOpenMenu ? "1" : "0",
            transition: "all 0.3s",
            visibility: isOpenMenu ? "visible" : "hidden",
            transform: isOpenMenu ? "translateY(0px)" : "translateY(-20px)",
            transitionDelay: "0.3s",
          }}
        >
          Dự án
        </button>
        <button
          onClick={() => handleDirect("/member")}
          className="w-[100%] bg-primary/[0.8] active:bg-white/[0.8] active:text-primary text-center cursor-pointer transition-all py-[10px] text-white  hover:font-bold translate-y-[-20px]"
          style={{
            opacity: isOpenMenu ? "1" : "0",
            transition: "all 0.3s",
            visibility: isOpenMenu ? "visible" : "hidden",
            transform: isOpenMenu ? "translateY(0px)" : "translateY(-20px)",
            transitionDelay: "0.4s",
          }}
        >
          Thành viên
        </button>
        <button
          onClick={() => handleDirect("/leaderboard")}
          className="w-[100%] bg-primary/[0.8] active:bg-white/[0.8] active:text-primary text-center cursor-pointer transition-all py-[10px] text-white  hover:font-bold translate-y-[-20px]"
          style={{
            opacity: isOpenMenu ? "1" : "0",
            transition: "all 0.3s",
            visibility: isOpenMenu ? "visible" : "hidden",
            transform: isOpenMenu ? "translateY(0px)" : "translateY(-20px)",
            transitionDelay: "0.5s",
          }}
        >
          Bảng xếp hạng
        </button>
      </div>
    </motion.div>
  );
}

export default Header;
