import { useState } from "react";
import Controller from "./Controller";
import { Flex } from "@chakra-ui/react";
import DisplayImage from "./Display";
import { photoType, photo } from "@/constants";

export interface slideProps {
  images: photoType[];
  index: number;
  prevIndex: number;
}

const defaultValues = {
  images: photo,
  index: 0,
  prevIndex: -1,
};

const ImageSlide = () => {
  const [slide, setSlide] = useState<slideProps>(defaultValues);
  return (
    <Flex direction="column" position={"relative"} h={"100%"}>
      <DisplayImage slide={slide} />
      <Controller slide={slide} setSlide={setSlide} />
    </Flex>
  );
};

export default ImageSlide;
