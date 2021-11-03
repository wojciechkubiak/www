import { useState, useEffect } from "react";

const useWidth = () => {
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    if (width === undefined) {
      setWidth(window.innerWidth);
    }
  }, [width]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
};

export default useWidth;
