import { CenterLayout } from "@/components";
import { projects } from "@/constants";
import { Box, Flex, Heading, Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Box h={3200}>
      <CenterLayout>
        <Flex alignItems={"center"} direction={"column"} h={3200} gap={20}>
          <Heading size={"3xl"} color={"primary.500"} mt={20}>
            Project
          </Heading>
          <Grid
            templateColumns="repeat(1, 4fr)"
            gap={4}
            w="100%"
            h={2800}
            borderRadius={24}
            boxShadow="dark-lg"
            p={4}
          >
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
