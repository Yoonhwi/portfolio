import { Button, HStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { slideProps } from ".";

interface ControllerProps {
  slide: slideProps;
  setSlide: React.Dispatch<React.SetStateAction<slideProps>>;
}

const Controller = ({ slide, setSlide }: ControllerProps) => {
  const auto = 5000;

  const changeSlide = (index: number) => {
    if (index >= slide.images.length) {
      index = 0;
    }
    setSlide((prev) => {
      return {
        ...prev,
        index: index,
      };
    });
  };

  let interval: number | undefined = undefined;

  const autoSlide = useRef<() => void | undefined>();

  autoSlide.current = () => {
    if (auto > 0) {
      interval = setInterval(() => {
        setSlide((prev) => {
          return {
            ...prev,
            index: prev.index + 1 >= prev.images.length ? 0 : prev.index + 1,
          };
        });
      }, auto);
    }
  };
  useEffect(() => {
    if (!autoSlide.current) return;
    autoSlide.current();
    return () => clearInterval(interval);
  }, [interval]);

  return (
    <HStack mt={4} w="full" justify="center" position={"absolute"} bottom={0}>
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
