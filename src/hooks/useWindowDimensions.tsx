import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

export default function useWindowDimensions() {
  const [windowDimesions, setWindowDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    const handleSize = () => {
      setWindowDimensions(getWindowDimensions);
    };

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowDimesions;
}