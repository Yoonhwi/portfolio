import { ProjectType } from "@/constants";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Image,
} from "@chakra-ui/react";

interface ProjectCardProps {
  data: ProjectType;
}

const ProjectCard = ({ data }: ProjectCardProps) => {
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
          <Image src={data.imgSrc} h={400} w={500} alt={`${data.name}_img`} />
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
