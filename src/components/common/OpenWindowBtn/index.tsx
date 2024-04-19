import { links } from "@/constants";
import { Button, Flex } from "@chakra-ui/react";
import { useCallback } from "react";

interface OpenWindowBtnProps {
  project: string;
}

const OpenWindowBtn = ({ project }: OpenWindowBtnProps) => {
  const { git, demo } = links[project];

  const btnHandler = useCallback(
    (type: "git" | "demo") => {
      switch (type) {
        case "git":
          return window.open(git, "_blank");

        case "demo":
          return window.open(demo, "_blank");
      }
    },
    [demo, git]
  );
  return (
    <Flex gap={2} alignItems={"center"}>
      <Button size={"md"} onClick={() => btnHandler("git")}>
        Git
      </Button>
      {demo && (
        <Button size={"md"} onClick={() => btnHandler("demo")}>
          Demo
        </Button>
      )}
    </Flex>
  );
};

export default OpenWindowBtn;
