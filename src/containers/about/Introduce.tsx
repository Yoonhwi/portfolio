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
import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";

interface myInfoType {
  key: string;
  value: string;
  icon: IconType;
}

const myInfo: myInfoType[] = [
  {
    key: "이름",
    value: "윤승휘",
    icon: FaUser,
  },
  {
    key: "생년월일",
    value: "96.01.05",
    icon: FaBirthdayCake,
  },
  {
    key: "주소지",
    value: "서울특별시 관악구",
    icon: FaLocationDot,
  },
  {
    key: "연락처",
    value: "010-5045-9248",
    icon: FaPhone,
  },
  {
    key: "이메일",
    value: "ush0105@naver.com",
    icon: MdEmail,
  },
  {
    key: "학력",
    value: "동서대컴공 중퇴",
    icon: IoSchoolSharp,
  },
];

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
