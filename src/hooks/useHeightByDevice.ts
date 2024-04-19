import { useDeviceType } from ".";

const useHeightByDevice = (page: string) => {
  const isMobile = useDeviceType();

  switch (page) {
    case "about":
      return {
        parentHeight: isMobile ? 1600 : 1000,
        childHeight: isMobile ? 1500 : 900,
      };
    case "contact":
      return {
        parentHeight: isMobile ? 1400 : 1000,
        childHeight: isMobile ? 1300 : 900,
      };
    default:
      return {
        parentHeight: 0,
        childHeight: 0,
      };
  }
};

export default useHeightByDevice;
