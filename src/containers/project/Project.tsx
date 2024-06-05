import { CenterLayout } from "@/components";
import { projects } from "@/constants";
import { useScrollStore } from "@/store";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollStore(["registerSection"]);

  useEffect(() => {
    if (!projectRef.current) return;
    registerSection("Projects", projectRef.current.offsetTop);
  }, [projectRef, registerSection]);

  return (
    <Box ref={projectRef}>
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
