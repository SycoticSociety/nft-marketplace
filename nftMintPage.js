import React, { useContext, useEffect } from "react";
import UserContext from "../components/UserContext";
import Home_11 from './home/home_11'

export default function ToolUtilities() {
  const { scrollRef } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current.scrollPos);
    const handleScrollPos = () => {
      scrollRef.current.scrollPos = window.scrollY;
    };
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  });

  return (
    <>
      <Home_11/>
    </>
  );
}
