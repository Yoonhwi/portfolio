import { Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { Navbar } from "./Navbar";

const DefaultLayoutHeader = () => {
  const [isMax, setIsMax] = useState(true);

  const scrollListener = useCallback(() => {
    setIsMax(window.scrollY <= 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => scrollListener());
    return () => {
      window.removeEventListener("scroll", () => scrollListener());
    };
  }, [scrollListener]);

  return (
    <>
      <Flex
        as={"header"}
        w={"100%"}
        position={"fixed"}
        top={0}
        zIndex={99}
        boxShadow={isMax ? "none" : "md"}
      >
        <Navbar />
      </Flex>
    </>
  );
};

export default DefaultLayoutHeader;
