import { Heading, Stack, Flex } from "@chakra-ui/react";
import { Introduce, TechStack } from ".";

const Text = () => {
  return (
    <Stack spacing={16} w={500} gap={12}>
      <Flex direction="column" gap={4}>
        <Heading size="lg">Introduce</Heading>
        <Introduce />
      </Flex>
      <Flex direction="column" gap={4}>
        <Heading size="lg">Tech Stack</Heading>
        <TechStack />
      </Flex>
    </Stack>
  );
};

export default Text;
