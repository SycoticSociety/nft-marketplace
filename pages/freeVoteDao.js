import React, { useContext, useEffect } from "react";
import UserContext from "../components/UserContext";
import Home_9 from "./home/home_9";

export default function freeVoteDao() {
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
      <Home_9/>
    </>
  );
}