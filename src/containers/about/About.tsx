import { Box, Flex } from "@chakra-ui/react";
import { Photo, Text } from ".";
import { CenterLayout } from "@/components";

const About = () => {
  return (
    <Box h={800} bgImage={"photo1.jpg"} bgSize={"cover"}>
      <CenterLayout>
        <Flex h={800} justifyContent={"center"} alignItems={"center"} gap={16}>
          <Photo />
          <Text />
        </Flex>
      </CenterLayout>
    </Box>
  );
};

export default About;
