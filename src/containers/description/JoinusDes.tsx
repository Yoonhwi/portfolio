import { OpenWindowBtn, StackTags } from "@/components";
import { Flex, Text } from "@chakra-ui/react";

const Stacks: { [key: string]: string[] } = {
  Frontend: ["React", "TypeScript", "Next.js", "React-Query", "Chakra UI"],
};

const JoinusDes = () => {
  return (
    <Flex direction={"column"} gap={4} fontSize={"large"} fontWeight={"medium"}>
      <OpenWindowBtn project="JoinUs" />
      <Flex gap={1} opacity={0.8} direction={"column"}>
        <Text>backend 1명 frontend 2명 총3인의 팀프로젝트입니다.</Text>
        <Text>
          처음으로 Git을 이용해 협업을 해보며, 백엔드 개발자와 API명세를 만들고
          issue를남기며 소통하며 협업에 대해 많이 배울 수 있었습니다.
        </Text>
      </Flex>
      <Flex direction={"column"} gap={1}>
        <Text>
          공통의 관심사나 목적을 가진 사람들이 한데 모여 소통 및 다양한 활동을
          할 수 있는 플랫폼입니다.
        </Text>
        <Text>
          플랫폼의 유저들은 클럽을 생성하고, 원하는 클럽에 참여할 수 있습니다.
        </Text>
      </Flex>
      <StackTags tags={Stacks} />
    </Flex>
  );
};

export default JoinusDes;
