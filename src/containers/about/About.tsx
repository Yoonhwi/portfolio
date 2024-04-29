import { CenterLayout } from "@/components";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Photo, Text } from ".";

const About = () => {
  return (
    <Box bgColor={"gray.100"}>
      <CenterLayout>
        <Flex alignItems={"center"} direction={"column"} gap={20} py={20}>
          <Heading size={"3xl"}>About Me</Heading>
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
