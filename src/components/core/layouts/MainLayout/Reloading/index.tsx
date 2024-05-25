"use client";
import React, { useEffect, useState } from "react";
import "./style.css";

function Reloading() {
  return (
    <div className={`fixed top-0 w-full h-full z-[1000] animation-turn-off`}>
      <div className="flex h-full justify-center items-center bg-primary animate-fade-down-large">
        <div className="content flex justify-center items-center w-full animate-scale">
          <h2 className="text-[32px] md:text-[64px] lg:text-[64px] xl:text-[64px] text-white font-extrabold relative text-transparent">
            FU-DEVER
          </h2>
          <h2 className="text-[32px] md:text-[64px] lg:text-[64px] xl:text-[64px] text-white font-extrabold absolute">
            FU-DEVER
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Reloading;
