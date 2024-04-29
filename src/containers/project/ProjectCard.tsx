import { Swiper } from "@/components";
import { PhotoType, ProjectType, imgByProject } from "@/constants";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { ProjectImage } from "@/containers";

interface ProjectCardProps {
  data: ProjectType;
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  const imgs = imgByProject[data.name];

  return (
    <Card
      w={"100%"}
      borderRadius={24}
      boxShadow="lg"
      p={4}
      position={"relative"}
      bgColor={"white"}
    >
      <Stack divider={<StackDivider />}>
        <CardHeader>
          <Flex alignItems={"end"} gap={8}>
            <Heading size={"xl"} color={"primary.500"}>
              {data.name}
            </Heading>
            <Heading size={"sm"} color={"primary.500"} pb={1}>
              {data.date}
            </Heading>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex gap={8} direction={{ base: "column", lg: "row" }}>
            <Box w={500} h={400} boxShadow={"lg"}>
              {imgs && imgs.length > 0 && (
                <Swiper<PhotoType> datas={imgs} renderItem={ProjectImage} />
              )}
            </Box>
            {/* <ImageSlide images={imgs} w={500} /> */}
            {data.description && data.description()}
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
