import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [isOut, setIsOut] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => setIsOut(window.scrollY > 0);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return isOut;
};

export const useScrollPositionNumeric = () => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const scrollHandler = () => setPosition(window.scrollY);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return position;
};

export default useScrollPosition;
