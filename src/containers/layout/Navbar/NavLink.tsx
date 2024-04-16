import { navLinks } from "@/constants";
import { HStack, Box } from "@chakra-ui/react";
import { useCallback } from "react";
import ContactLink from "./ContactLink";
const NavLink = () => {
  const hanldeNavClick = useCallback((offsetY: number) => {
    window.scrollTo({ top: offsetY, behavior: "smooth" });
  }, []);

  return (
    <HStack spacing={12} as={"nav"} fontSize={20} fontWeight={600}>
      {navLinks.map((link) => (
        <Box
          key={link.name}
          onClick={() => hanldeNavClick(link.offsetY)}
          _hover={{
            cursor: "pointer",
            color: "primary.500",
            transform: "scale(1.2)",
            transition: "all 0.5s ease",
          }}
        >
          {link.name}
        </Box>
      ))}
      <ContactLink />
    </HStack>
  );
};

export default NavLink;
