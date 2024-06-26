import { useIntersectionObserver } from "@/hooks";
import { useScrollStore } from "@/store";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import ContactLink from "./ContactLink";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollStore(["registerSection"]);

  const isVisible = useIntersectionObserver({
    target: contactRef,
    threshold: 0.5,
  });

  const updateSection = useCallback(() => {
    if (!contactRef.current) return;
    registerSection("Contact", contactRef.current.offsetTop);
  }, [registerSection]);

  useEffect(() => {
    updateSection();
    window.addEventListener("resize", updateSection);
    return () => window.removeEventListener("resize", updateSection);
  }, [contactRef, updateSection]);

  return (
    <Box
      as={"footer"}
      bgColor={"blackAlpha.50"}
      ref={contactRef}
      height={"100vh"}
      opacity={isVisible ? 1 : 0}
      transition={"opacity 1s ease-in-out"}
    >
      <Flex
        direction={"column"}
        gap={"12"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"100%"}
      >
        <Heading as={"h2"} size={"2xl"}>
          Contact
        </Heading>
        <ContactLink />
      </Flex>
    </Box>
  );
};

export default Contact;
