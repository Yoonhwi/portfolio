import { OpenWindowBtn, StackTags } from "@/components";
import { Flex, Text } from "@chakra-ui/react";

const Stacks: { [key: string]: string[] } = {
  Frontend: ["HTML/CSS", "React", "TypeScript", "Next.js"],
  Backend: ["Node.js", "MySql"],
};

const CookaDes = () => {
  return (
    <Flex direction={"column"} gap={4} fontSize={"large"} fontWeight={"medium"}>
      <OpenWindowBtn project="Cooka" />
      <Flex gap={"2"} opacity={0.8} direction={"column"}>
        <Text>
          백엔드와 프론트엔드를 공부하며 웹개발에 대한 이해도를 쌓을 수
          있었습니다.
        </Text>
        <Text>
          HTML, CSS, React를 배워나가면서 프론트엔드에 매력을 느낀 계기가
          되었습니다.
        </Text>
      </Flex>
      <Flex direction={"column"} gap={"2"}>
        <Text>요리를 좋아하는 사람들을 위한 커뮤니티 사이트입니다.</Text>
        <Text>
          서로의 레시피,맛집을 공유하며 댓글로 의견을 공유할 수 있습니다.
        </Text>
        <Text>검색, 좋아요를 활용하여 게시물을 모아볼 수 있습니다.</Text>
      </Flex>
      <StackTags tags={Stacks} />
    </Flex>
  );
};

export default CookaDes;
