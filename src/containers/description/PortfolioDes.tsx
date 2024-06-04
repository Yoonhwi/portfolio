import { OpenWindowBtn, StackTags } from "@/components";
import { Flex, Text } from "@chakra-ui/react";

const Stacks: { [key: string]: string[] } = {
  Frontend: ["React", "TypeScript", "Chakra UI"],
};

const PortfolioDes = () => {
  return (
    <Flex direction={"column"} gap={4} fontSize={"large"} fontWeight={"medium"}>
      <OpenWindowBtn project="Portfolio" />

      <Flex direction={"column"} gap={"2"}>
        <Text>
          이 웹페이지는 포트폴리오 용도로 제작된 React 기반의 웹사이트입니다.
        </Text>
        <Text>
          Notion이나 PDF보다는 저만의 포트폴리오 웹사이트를 가지고 싶어 직접
          제작하였습니다.
        </Text>
        <Text>GitHub와 블로그 주소를 확인할 수 있습니다.</Text>
        <Text>
          간단한 자기소개와 함께, 진행했던 프로젝트의 이미지, 링크, 그리고
          프로젝트별 Drawer를 통해 상세한 설명을 볼 수 있습니다.
        </Text>
      </Flex>
      <StackTags tags={Stacks} />
    </Flex>
  );
};

export default PortfolioDes;
