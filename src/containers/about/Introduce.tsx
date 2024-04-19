import { myInfo } from "@/constants";
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

const Introduce = () => {
  return (
    <Grid gap={4} templateColumns="repeat(2, 3fr)" w={"100%"} borderRadius={16}>
      {myInfo.map((meta) => {
        return (
          <Card key={meta.key} boxShadow={"xl"}>
            <Stack>
              <CardHeader p={4} pb={2}>
                <Flex alignItems={"center"} gap={2}>
                  <Icon as={meta.icon} fontSize={24} />
                  <Heading size={"md"}>{meta.key}</Heading>
                </Flex>
              </CardHeader>
              <CardBody p={4} pt={2}>
                <Text fontWeight={"semibold"}>{meta.value}</Text>
              </CardBody>
            </Stack>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Introduce;
