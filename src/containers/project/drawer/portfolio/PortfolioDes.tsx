import { Flex, Heading, Text } from "@chakra-ui/react";

const PortfolioDes = () => {
  return (
    <Flex direction={"column"} gap={"2"}>
      <Heading size={"xl"}>Portfolio</Heading>
      <Flex direction={"column"} gap={"1"}>
        <Heading size={"lg"}>프로젝트 소개</Heading>
        <Text>포트폴리오는 ~</Text>
      </Flex>
      <Heading size={"lg"}>사용된 스택</Heading>
      <Text fontSize={"xl"}>
        React, Typescript, Chakra-ui, Swiper, Axios, React-router-dom,
        React-hook-form, React-icons, React-query, React-toastify,
        React-helmet-async, React-markdown, React-syntax-highlighter
      </Text>
    </Flex>
  );
};

export default PortfolioDes;
