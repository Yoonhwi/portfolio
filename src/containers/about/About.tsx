import { CenterLayout } from "@/components";
import { useScrollStore } from "@/store";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Text } from ".";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollStore(["registerSection"]);

  useEffect(() => {
    if (!aboutRef.current) return;
    registerSection("About", aboutRef.current.offsetTop);
  }, [aboutRef, registerSection]);

  return (
    <Box bgColor={"blackAlpha.50"} ref={aboutRef}>
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
            {/* <Photo /> */}
            <Text />
          </Flex>
        </Flex>
      </CenterLayout>
    </Box>
  );
};

export default About;
