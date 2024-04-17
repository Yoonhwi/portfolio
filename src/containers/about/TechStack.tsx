import { HStack, Image } from "@chakra-ui/react";

const stacks = [
  {
    name: "HTML",
    src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  },
  {
    name: "CSS",
    src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white",
  },
  {
    name: "JavsScript",
    src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black",
  },
  {
    name: "React",
    src: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black",
  },
  {
    name: "Next.js",
    src: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white",
  },
  {
    name: "Node.js",
    src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white",
  },
  {
    name: "TypeScript",
    src: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white",
  },
];

const TechStack = () => {
  return (
    <HStack spacing={2} wrap={"wrap"}>
      {stacks.map((stack) => {
        return <Image alt={stack.name} src={stack.src} key={stack.name} />;
      })}
    </HStack>
  );
};

export default TechStack;
