import { StackTags } from "@/components";
import { Flex, Heading, Text } from "@chakra-ui/react";

const Stacks: { [key: string]: string[] } = {
  Frontend: ["React", "TypeScript", "Chakra UI"],
};

const PortfolioContent = () => {
  return (
    <Flex direction={"column"} gap={"20"} fontSize={"18px"}>
      <Flex direction={"column"} gap={"6"}>
        <Heading size={"lg"}>💻 소개</Heading>
        <Flex direction={"column"} gap={"4"}>
          <Text>
            이 웹페이지는 포트폴리오 용도로 제작된 React 기반의 웹사이트입니다.
          </Text>
          <Text>
            Notion이나 PDF보다는 저만의 포트폴리오 웹사이트를 직접
            제작하였습니다.
          </Text>
          <Text>
            GitHub와 블로그 주소를 확인할 수 있으며, 간단한 자기소개와 함께
          </Text>
          <Text>
            진행했던 프로젝트의 이미지, 링크, 그리고 상세한 설명을 볼 수
            있습니다.
          </Text>
          <Text>
            매끄러운 무한 루프의 이미지 슬라이더를 위해 Swiper 라이브러리를
            사용하였습니다.
          </Text>
          <Text>
            보시는 것 처럼 Drawer방식을 사용하여 프로젝트별 상세한 설명을 볼 수
            있도록 구현하였습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={"6"}>
        <Heading size={"lg"}>🛠️ 기술 스택</Heading>
        <StackTags tags={Stacks} />
      </Flex>
    </Flex>
  );
};

export default PortfolioContent;
