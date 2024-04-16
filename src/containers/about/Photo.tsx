import { ImageSlide } from "@/components";
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
      <ImageSlide />
    </Box>
  );
};

export default Photo;
