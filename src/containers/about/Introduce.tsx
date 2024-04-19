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
} from "@chakra-ui/react";

const Introduce = () => {
  return (
    <Grid gap={4} templateColumns="repeat(2, 3fr)" w={"100%"} borderRadius={16}>
      {myInfo.map((meta) => {
        return (
          <>
            <Card key={meta.key} boxShadow={"xl"}>
              <Stack>
                <CardHeader p={2} pt={4} pl={4}>
                  <Flex alignItems={"center"} gap={2}>
                    <Icon as={meta.icon} fontSize={24} />
                    <Heading size={"md"}>{meta.key}</Heading>
                  </Flex>
                </CardHeader>
                <CardBody p={2} pb={4} pl={4} fontWeight={600}>
                  {meta.value}
                </CardBody>
              </Stack>
            </Card>
          </>
        );
      })}
    </Grid>
  );
};

export default Introduce;
