import { Swiper } from "@/components";
import { PhotoType, photo } from "@/constants";
import { Flex } from "@chakra-ui/react";
import { AboutImage } from ".";

const Photo = () => {
  return (
    <Flex
      w={500}
      h={600}
      direction={"column"}
      gap={4}
      alignItems={"center"}
      boxShadow={"2xl"}
      overflow={"hidden"}
      p={2}
    >
      <Swiper<PhotoType> datas={photo} renderItem={AboutImage} />
    </Flex>
  );
};

export default Photo;
