import { useState } from "react";
import Controller from "./Controller";
import { Flex } from "@chakra-ui/react";
import DisplayImage from "./Display";
import { PhotoType } from "@/constants";

interface ImageSlideProps {
  images: PhotoType[];
  w: number;
  auto?: number;
}

export interface slideProps {
  images: PhotoType[];
  index: number;
  prevIndex: number;
}

const ImageSlide = ({ images, w, auto }: ImageSlideProps) => {
  const [slide, setSlide] = useState<slideProps>({
    images: images,
    index: 0,
    prevIndex: -1,
  });
  return (
    <Flex direction="column" position={"relative"} h={"100%"}>
      {slide.images && slide.images.length > 0 && (
        <>
          <DisplayImage slide={slide} w={w} />
          <Controller slide={slide} setSlide={setSlide} auto={auto} />
        </>
      )}
    </Flex>
  );
};

export default ImageSlide;
