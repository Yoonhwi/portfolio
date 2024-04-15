import { Box } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { Navbar } from "@/containers";

const DefaultLayoutHeader = () => {
  const [isMax, setIsMax] = useState(false);

  const scrollListener = useCallback(() => {
    setIsMax(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => scrollListener());
    return () => {
      window.removeEventListener("scroll", () => scrollListener());
    };
  }, [scrollListener]);

  return (
    <>
      <Box
        as={"header"}
        w={"100%"}
        position={"fixed"}
        top={0}
        zIndex={99}
        boxShadow={isMax ? "md" : "none"}
        opacity={isMax ? 0.7 : 1}
      >
        <Navbar />
      </Box>
    </>
  );
};

export default DefaultLayoutHeader;
