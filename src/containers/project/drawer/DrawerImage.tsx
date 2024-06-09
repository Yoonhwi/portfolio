import { PhotoType } from "@/constants";
import { Flex, Image, Text } from "@chakra-ui/react";

interface DrawerImageProcps {
  data: PhotoType;
}
const DrawerImage = ({ data }: DrawerImageProcps) => {
  return (
    <Flex direction={"column"} gap={6} alignItems={"center"}>
      <Image src={data.src} alt="drawer_img" />
      <Text>{data.text}</Text>
    </Flex>
  );
};

export default DrawerImage;
