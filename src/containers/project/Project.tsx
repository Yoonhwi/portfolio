import { CenterLayout } from "@/components";
import { projects } from "@/constants";
import { Box, Flex, Heading, Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Box>
      <CenterLayout>
        <Flex alignItems={"center"} direction={"column"} gap={20} py={20}>
          <Heading size={"3xl"} color={"primary.500"}>
            Project
          </Heading>
          <Grid templateColumns="repeat(1, 4fr)" gap={4} w="100%">
            {projects.map((project) => {
              return <ProjectCard data={project} key={project.name} />;
            })}
          </Grid>
        </Flex>
      </CenterLayout>
    </Box>
  );
};

export default Project;
