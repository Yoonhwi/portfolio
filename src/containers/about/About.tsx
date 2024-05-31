import { CenterLayout } from "@/components";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Photo, Text } from ".";

const About = () => {
  return (
    <Box bgColor={"blackAlpha.50"}>
      <CenterLayout>
        <Flex
          alignItems={"center"}
          direction={"column"}
          gap={20}
          py={"12"}
          bgColor={"white"}
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
            <Photo />
            <Text />
          </Flex>
        </Flex>
      </CenterLayout>
    </Box>
  );
};

export default About;
