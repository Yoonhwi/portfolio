import { PhotoType } from "@/constants";
import { Flex, Image, Text } from "@chakra-ui/react";

interface AboutImagesProps {
  data: PhotoType;
}
const AboutImage = ({ data }: AboutImagesProps) => {
  return (
    <Flex direction={"column"} gap={6} alignItems={"center"}>
      <Image src={data.src} alt="about_img" />
      <Text>{data.text}</Text>
    </Flex>
  );
};

export default AboutImage;
