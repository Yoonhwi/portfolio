import { FaGithub } from "react-icons/fa";
import IconAnimation from "./IconAnimation";
import { HStack } from "@chakra-ui/react";
import { FaBlog } from "react-icons/fa6";

const ContactLink = () => {
  return (
    <HStack spacing={4}>
      <IconAnimation
        icon={<FaGithub style={{ fontSize: "2rem" }} />}
        label={"Git hub"}
        link={"https://github.com/Yoonhwi"}
      />
      <IconAnimation
        icon={<FaBlog style={{ fontSize: "1.8rem" }} />}
        label={"Blog"}
        link={"https://winhwi.tistory.com/"}
      />
    </HStack>
  );
};

export default ContactLink;
