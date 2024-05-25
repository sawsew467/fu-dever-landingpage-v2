"use client";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Reloading from "./Reloading";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsloading(false);
    }, 2000);

    const minimumLoadingTime = 2000;
    const additionalTime = minimumLoadingTime - 2000;
    if (additionalTime > 0) {
      setTimeout(() => {
        setIsloading(false);
      }, additionalTime);
    }

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <>
      {isLoading ? <Reloading /> : null}
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
