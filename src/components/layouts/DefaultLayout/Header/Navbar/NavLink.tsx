import { Box, HStack } from "@chakra-ui/react";
import ContactLink from "./ContactLink";
import { useScrollObserver } from "@/hooks";
import { SectionName } from "@/constants";

interface NavLinkProps {
  name: SectionName;
}

const navLinks: NavLinkProps[] = [
  { name: "About" },
  { name: "Projects" },
  { name: "Contact" },
];

const NavLink = () => {
  const { scrollToSection } = useScrollObserver();

  return (
    <HStack spacing={12} as={"nav"} fontSize={20} fontWeight={600}>
      {navLinks.map((link) => (
        <Box
          key={link.name}
          onClick={() => {
            scrollToSection(link.name);
          }}
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
