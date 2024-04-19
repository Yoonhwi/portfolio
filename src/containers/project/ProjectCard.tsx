import { ImageSlide } from "@/components";
import { ProjectType, imgByProject } from "@/constants";
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
          <Heading size={"xl"} color={"primary.500"}>
            {data.name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Flex>
            <Box h={500}>
              <ImageSlide images={imgs} w={500} h={400} />
            </Box>
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
