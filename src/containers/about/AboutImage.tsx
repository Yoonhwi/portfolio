import { PhotoType } from "@/constants";
import { Flex, Image, Text } from "@chakra-ui/react";

interface AboutImagesProps {
  data: PhotoType;
}
const AboutImage = ({ data }: AboutImagesProps) => {
  return (
    <Flex direction={"column"} gap={6} alignItems={"center"}>
      <Image src={data.src} alt="about_img" minW={500} maxW={500} h={500} />
      <Text>{data.text}</Text>
    </Flex>
  );
};

export default AboutImage;
