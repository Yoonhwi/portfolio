import { SectionName } from "@/constants";
import { useScrollStore } from "@/store";
import { Box, HStack } from "@chakra-ui/react";
import { useCallback } from "react";
import ContactLink from "./ContactLink";

interface NavLinkProps {
  name: SectionName;
}

const navLinks: NavLinkProps[] = [
  { name: "About" },
  { name: "Projects" },
  { name: "Contact" },
];

const NavLink = () => {
  const { sections } = useScrollStore(["sections"]);

  const scrollHandler = useCallback(
    (name: SectionName) => {
      window.scrollTo({ top: sections[name], behavior: "smooth" });
    },
    [sections]
  );

  return (
    <HStack spacing={12} as={"nav"} fontSize={20} fontWeight={600}>
      {navLinks.map((link) => (
        <Box
          key={link.name}
          onClick={() => scrollHandler(link.name)}
          _hover={{
            cursor: "pointer",
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
