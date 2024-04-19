import { Button, HStack } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { slideProps } from ".";

interface ControllerProps {
  slide: slideProps;
  setSlide: React.Dispatch<React.SetStateAction<slideProps>>;
  auto?: number;
}

const Controller = ({ slide, setSlide, auto }: ControllerProps) => {
  const changeSlide = useCallback(
    (index: number) => {
      if (index >= slide.images.length) {
        index = 0;
      }
      setSlide((prev) => {
        return {
          ...prev,
          index: index,
        };
      });
    },
    [setSlide, slide.images.length]
  );

  useEffect(() => {
    if (!auto) return;
    const interval = setInterval(() => {
      setSlide((prev) => {
        return {
          ...prev,
          index: prev.index + 1 >= prev.images.length ? 0 : prev.index + 1,
        };
      });
    }, auto);
    return () => clearInterval(interval);
  }, [auto, setSlide]);

  return (
    <HStack mt={4} w="full" justify="center">
      {slide.images.map((img, index) => (
        <Button
          onClick={() => changeSlide(index)}
          colorScheme={slide?.index === index ? "primary" : "gray"}
          borderRadius="full"
          size="sm"
          key={`button_${img.src}_${index}`}
        >
          {index + 1}
        </Button>
      ))}
    </HStack>
  );
};

export default Controller;
