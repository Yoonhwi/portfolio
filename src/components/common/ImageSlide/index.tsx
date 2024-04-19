import { useState } from "react";
import Controller from "./Controller";
import { Flex } from "@chakra-ui/react";
import DisplayImage from "./Display";
import { PhotoType } from "@/constants";

interface ImageSlideProps {
  images: PhotoType[];
  h: number;
  w: number;
}

export interface slideProps {
  images: PhotoType[];
  index: number;
  prevIndex: number;
}

const ImageSlide = ({ images, h, w }: ImageSlideProps) => {
  const [slide, setSlide] = useState<slideProps>({
    images: images,
    index: 0,
    prevIndex: -1,
  });
  return (
    <Flex direction="column" position={"relative"} h={"100%"}>
      {slide.images && slide.images.length > 0 && (
        <>
          <DisplayImage slide={slide} h={h} w={w} />
          <Controller slide={slide} setSlide={setSlide} />
        </>
      )}
    </Flex>
  );
};

export default ImageSlide;
