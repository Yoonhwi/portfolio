import { Flex, Collapse, Image, Text } from "@chakra-ui/react";
import { slideProps } from ".";

interface DisplayProps {
  slide: slideProps;
  h: number;
  w: number;
}

const DisplayImage = ({ slide, h, w }: DisplayProps) => {
  return (
    <>
      {slide.images.map((img, index) => (
        <Collapse in={index === slide?.index} key={`${img.src}_${index}`}>
          <Flex direction="column" gap={8} alignItems="center">
            <Image
              src={img.src}
              w={w}
              h={h}
              borderRadius={24}
              boxShadow={"xl"}
            />
            <Text> {slide.images[slide.index].text} </Text>
          </Flex>
        </Collapse>
      ))}
    </>
  );
};

export default DisplayImage;
