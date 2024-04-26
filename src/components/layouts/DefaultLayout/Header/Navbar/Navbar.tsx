import { Box, Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Box width={"1280px"} margin={"0 auto"} zIndex={99}>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"100px"}
      >
        <Logo />
        <NavLink />
      </Flex>
    </Box>
  );
};

export default Navbar;
