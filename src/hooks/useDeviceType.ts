import { useCallback, useEffect, useState } from "react";

const MOBILE_WIDTH = 1280;

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_WIDTH);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isMobile;
};

export default useDeviceType;
