import { OpenWindowBtn, StackTags } from "@/components";
import { Flex, Text } from "@chakra-ui/react";

const Stacks: { [key: string]: string[] } = {
  Frontend: ["React", "TypeScript", "Chakra UI"],
};

const PortfolioDes = () => {
  return (
    <Flex direction={"column"} gap={4} fontSize={"large"} fontWeight={"medium"}>
      <OpenWindowBtn project="Portfolio" />
      <Flex gap={1} opacity={0.8} direction={"column"}>
        <Text>포트폴리오 용도로 제작된 웹페이지 입니다.</Text>
      </Flex>
      <Flex direction={"column"} gap={1}>
        <Text>GitHub와 블로그 주소를 확인할 수 있으며</Text>
        <Text>간단한 자기소개와 함께</Text>
        <Text>
          진행했던 프로젝트의 이미지, 링크, 그리고 상세한 설명을 볼 수 있습니다.
        </Text>
      </Flex>
      <StackTags tags={Stacks} />
    </Flex>
  );
};

export default PortfolioDes;
