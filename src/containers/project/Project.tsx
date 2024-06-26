import { CenterLayout } from "@/components";
import { projects } from "@/constants";
import { useIntersectionObserver } from "@/hooks";
import { useScrollStore } from "@/store";
import { Box, Flex, Grid, Heading, Tag } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollStore(["registerSection"]);
  const isVisible = useIntersectionObserver({
    target: projectRef,
    threshold: 0.1,
  });

  const updateSection = useCallback(() => {
    if (!projectRef.current) return;
    registerSection("Projects", projectRef.current.offsetTop);
  }, [registerSection]);

  useEffect(() => {
    updateSection();
    window.addEventListener("resize", updateSection);
    return () => window.removeEventListener("resize", updateSection);
  }, [projectRef, updateSection]);

  return (
    <Box
      ref={projectRef}
      opacity={isVisible ? 1 : 0}
      transition={"opacity 1s ease-in-out"}
    >
      <CenterLayout>
        <Flex alignItems={"center"} direction={"column"} gap={20} py={20}>
          <Flex direction={"column"} gap={"8"} alignItems={"center"}>
            <Heading size={"3xl"} color={"primary.500"}>
              Project
            </Heading>
            <Heading size={"sm"} color={"gray.500"}>
              <Tag p={2}>
                프로젝트별 본문 내용을 클릭 시 Drawer를 통해 상세 내용 확인
                가능합니다.
              </Tag>
            </Heading>
          </Flex>
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
