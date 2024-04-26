import { Collapse, Flex, Image, Text } from "@chakra-ui/react";
import { slideProps } from ".";

interface DisplayProps {
  slide: slideProps;
  w: number;
}

const DisplayImage = ({ slide, w }: DisplayProps) => {
  return (
    <Flex flex={1} justify={"center"} direction={"column"}>
      {slide.images.map((img, index) => {
        const text = slide.images[slide.index].text;

        return (
          <Collapse in={index === slide?.index} key={`${img.src}_${index}`}>
            <Flex flex={1} direction="column" gap={8}>
              <Image
                src={img.src}
                minW={w}
                maxW={w}
                borderRadius={24}
                boxShadow={"xl"}
                objectFit={"cover"}
                h={400}
              />
              {text && (
                <Text textAlign={"center"}>
                  {slide.images[slide.index].text}
                </Text>
              )}
            </Flex>
          </Collapse>
        );
      })}
    </Flex>
  );
};

export default DisplayImage;
