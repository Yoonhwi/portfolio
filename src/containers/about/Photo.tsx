import { ImageSlide } from "@/components";
import { photo } from "@/constants";
import { Box } from "@chakra-ui/react";

const Photo = () => {
  return (
    <Box
      w={500}
      h={600}
      bgColor={"white"}
      boxShadow={"dark-lg"}
      borderRadius={24}
      p={4}
    >
      <ImageSlide images={photo} w={500} h={400} />
    </Box>
  );
};

export default Photo;
