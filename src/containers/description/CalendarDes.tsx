import { OpenWindowBtn, StackTags } from "@/components";
import { Flex, Text } from "@chakra-ui/react";

const Stacks: { [key: string]: string[] } = {
  Frontend: ["HTML/CSS", "React", "TypeScript", "Next.js", "React-Query"],
  Backend: ["Node.js", "MySql"],
};

const CalendarDes = () => {
  return (
    <Flex direction={"column"} gap={4} fontSize={"large"} fontWeight={"medium"}>
      <OpenWindowBtn project="Calendar" />
      <Flex gap={1} opacity={0.8} direction={"column"}>
        <Text>
          데이터 관리의 효율에 대해 고민하던시점에, 캐싱관리나 fetching 성공여부
          등 다양한 플래그들을 지원해주는 React-Query에 대해 알게 되었습니다.
        </Text>
        <Text>
          React-Query를 사용해 데이터를 관리해보고, 다양한 디바이스와 동적인
          화면의 크기에 대응하기위해 반응형 디자인을 적용하는것이 프로젝트의
          목표 입니다.
        </Text>
      </Flex>
      <Flex direction={"column"} gap={1}>
        <Text>
          해당 목적에 맞게 대중적인 TodoList와 Calendar를 결합한 형태의
          프로젝트를 주제로 선정했습니다.
        </Text>
      </Flex>
      <StackTags tags={Stacks} />
    </Flex>
  );
};

export default CalendarDes;
