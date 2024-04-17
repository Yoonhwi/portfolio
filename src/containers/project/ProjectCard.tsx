import { Flex, Heading, Text } from "@chakra-ui/react";

interface ProjectCardProps {
  name: string;
  imgSrc: string;
}

const ProjectCard = ({ name, imgSrc }: ProjectCardProps) => {
  return (
    <Flex
      bgColor="primary.200"
      borderRadius={24}
      boxShadow="lg"
      p={4}
      position={"relative"}
    >
      <Heading size={"xl"} color={"white"}>
        {name}
      </Heading>
    </Flex>
  );
};

export default ProjectCard;
