import { Flex, Heading, Tag } from "@chakra-ui/react";

interface StackTagsProps {
  tags: { [key: string]: string[] };
}

const StackTags = ({ tags }: StackTagsProps) => {
  return (
    <Flex gap={2} direction={"column"}>
      {Object.keys(tags).map((key) => {
        return (
          <Flex alignItems={"center"} key={key}>
            <Heading size={"md"} flex={1}>
              {key}
            </Heading>
            <Flex flex={5} gap={2}>
              {tags[key].map((stack) => {
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
  );
};

export default StackTags;
