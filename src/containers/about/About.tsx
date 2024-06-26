import { CenterLayout } from "@/components";
import { useScrollStore } from "@/store";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import { Text } from ".";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollStore(["registerSection"]);

  const updateSection = useCallback(() => {
    if (!aboutRef.current) return;
    registerSection("About", aboutRef.current.offsetTop);
  }, [registerSection]);

  useEffect(() => {
    updateSection();
    window.addEventListener("resize", updateSection);
    return () => window.removeEventListener("resize", updateSection);
  }, [aboutRef, updateSection]);

  return (
    <Box bgColor={"blackAlpha.50"} ref={aboutRef} h={"100vh"}>
      <CenterLayout>
        <Flex
          alignItems={"center"}
          direction={"column"}
          gap={20}
          py={"12"}
          borderRadius={"md"}
          my={12}
        >
          <Heading size={"2xl"}>About Me</Heading>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={16}
            direction={{ base: "column", xl: "row" }}
          >
            <Text />
          </Flex>
        </Flex>
      </CenterLayout>
    </Box>
  );
};

export default About;
