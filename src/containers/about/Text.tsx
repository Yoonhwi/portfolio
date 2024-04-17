import { Heading, Stack, Flex } from "@chakra-ui/react";
import { TechStack } from ".";

const Text = () => {
  return (
    <Stack spacing={16} w={500}>
      <Heading size="3xl">Introduce</Heading>
      <Flex direction="column" gap={2}>
        <Heading size="lg">Stack</Heading>
        <TechStack />
      </Flex>
    </Stack>
  );
};

export default Text;
