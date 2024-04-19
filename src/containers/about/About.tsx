import { Box, Flex, Heading } from "@chakra-ui/react";
import { Photo, Text } from ".";
import { CenterLayout } from "@/components";
import { useDeviceType, useGetHeightByDevice } from "@/hooks";

const About = () => {
  const isMobile = useDeviceType();
  const { parentHeight, childHeight } = useGetHeightByDevice("about");

  return (
    <Box h={parentHeight} bgImage={"photo1.jpg"} bgSize={"cover"}>
      <CenterLayout>
        <Flex
          alignItems={"center"}
          direction={"column"}
          h={parentHeight}
          gap={20}
        >
          <Heading size={"3xl"} mt={20}>
            About Me
          </Heading>
          <Flex
            h={childHeight}
            justifyContent={"center"}
            alignItems={"center"}
            gap={16}
            direction={isMobile ? "column" : "row"}
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
