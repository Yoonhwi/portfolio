import { CenterLayout } from "@/components";
import { projects } from "@/constants";
import { Box, Flex, Heading, Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Box h={1200} bgColor={"primary.200"}>
      <CenterLayout>
        <Flex alignItems={"center"} direction={"column"} h={1200} gap={20}>
          <Heading size={"3xl"} color={"white"} mt={20}>
            Project
          </Heading>
          <Grid
            templateColumns="repeat(2, 2fr)"
            gap={4}
            w="100%"
            h={800}
            borderRadius={24}
            boxShadow="dark-lg"
            p={4}
            bgColor={"white"}
          >
            {projects.map((project) => {
              return (
                <ProjectCard name={project.name} imgSrc={project.imgSrc} />
              );
            })}
          </Grid>
        </Flex>
      </CenterLayout>
    </Box>
  );
};

export default Project;
