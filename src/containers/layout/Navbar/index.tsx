import { Box, Flex, Image } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <Box
      width={"1280px"}
      margin={"0 auto"}
      pt={"1.125rem"}
      pb={"1.125rem"}
      zIndex={999}
    >
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <Image src={"/logo.bmp"} alt={"logo"} width={"150px"} />
        <NavLink />
      </Flex>
    </Box>
  );
};

export default Navbar;
