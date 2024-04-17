import { Box, Flex } from "@chakra-ui/react";
import { Photo, Text } from ".";

const About = () => {
  return (
    <Box h={800} bgImage={"photo1.jpg"} bgSize={"cover"}>
      <Flex h={800} justifyContent={"center"} alignItems={"center"} gap={16}>
        <Photo />
        <Text />
      </Flex>
    </Box>
  );
};

export default About;
