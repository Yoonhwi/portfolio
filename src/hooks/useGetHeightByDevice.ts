import { useMemo } from "react";
import { useDeviceType } from ".";

interface GetValuesType {
  [name: string]: {
    parentHeight: number;
    childHeight: number;
  };
}
[];

const useGetHeightByDevice = (page: string) => {
  const isMobile = useDeviceType();

  const getValues: GetValuesType = useMemo(() => {
    return {
      about: {
        parentHeight: isMobile ? 1600 : 1000,
        childHeight: isMobile ? 1500 : 900,
      },
      contact: {
        parentHeight: isMobile ? 1400 : 1000,
        childHeight: isMobile ? 1300 : 900,
      },
    };
  }, [isMobile]);

  return getValues[page];
};

export default useGetHeightByDevice;
