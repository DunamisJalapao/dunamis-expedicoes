import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  if (typeof window === "undefined") {
    return { width: 1024, height: 768 };
  }
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(() =>
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    // Set initial dimensions
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
