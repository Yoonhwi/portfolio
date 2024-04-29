import { OpenWindowBtn } from "@/components";
import { Flex, Heading, Tag, Text } from "@chakra-ui/react";

const Stacks: { [key: string]: string[] } = {
  FrontStacks: ["HTML/CSS", "React", "TypeScript", "Next.js"],
  BackStacks: ["Node.js", "MySql"],
};

const CookaDes = () => {
  return (
    <Flex direction={"column"} gap={4} fontSize={"large"} fontWeight={"medium"}>
      <OpenWindowBtn project="Cooka" />
      <Flex gap={1} opacity={0.8} direction={"column"}>
        <Text>
          백엔드와 프론트엔드를 공부하며 웹개발에 대한 이해도를 쌓을 수
          있었습니다.
        </Text>
        <Text>
          HTML, CSS, React를 배워나가면서 프론트엔드에 매력을 느낀 계기가
          되었습니다.
        </Text>
      </Flex>
      <Flex direction={"column"} gap={1}>
        <Text>요리를 좋아하는 사람들을 위한 커뮤니티 사이트입니다.</Text>
        <Text>
          서로의 레시피,맛집을 공유하며 댓글로 의견을 공유할 수 있습니다.
        </Text>
        <Text>검색, 좋아요를 활용하여 게시물을 모아볼 수 있습니다.</Text>
      </Flex>
      <Flex gap={2} direction={"column"}>
        {Object.keys(Stacks).map((key) => {
          return (
            <Flex alignItems={"center"} key={key}>
              <Heading size={"md"} flex={1}>
                {key}
              </Heading>
              <Flex flex={4} gap={2}>
                {Stacks[key].map((stack) => {
                  return (
                    <Tag key={stack} p={2} colorScheme="gray">
                      {stack}
                    </Tag>
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default CookaDes;
