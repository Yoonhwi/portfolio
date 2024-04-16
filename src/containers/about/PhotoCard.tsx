import { Stack, Image, Text } from "@chakra-ui/react";

interface PhotoCardProps {
  src: string;
  text: string;
}

const PhotoCard = ({ src, text }: PhotoCardProps) => {
  return (
    <Stack
      spacing={12}
      w={500}
      h={600}
      bgColor={"white"}
      boxShadow={"lg"}
      borderRadius={24}
      p={4}
    >
      <Image src={src} borderRadius={24} w={500} h={300} />
      <Text>{text}</Text>
    </Stack>
  );
};
export default PhotoCard;
