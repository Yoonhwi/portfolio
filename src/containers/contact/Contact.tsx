import { useScrollStore } from "@/store";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaBlog, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface ContactInfoType {
  label: string;
  icon: JSX.Element;
  url?: string;
  info?: string;
}

const ContactInfoLink: ContactInfoType[] = [
  {
    label: "Git Hub",
    icon: <FaGithub />,
    url: "https://github.com/Yoonhwi",
  },
  {
    label: "Blog",
    icon: <FaBlog />,
    url: "https://winhwi.tistory.com/",
  },
];

const ContactInfoPopup: ContactInfoType[] = [
  {
    label: "Email",
    icon: <MdEmail />,
    info: "ush0105@naver.com",
  },
  {
    label: "Phone",
    icon: <FaPhone />,
    info: "010-5045-9248",
  },
];

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollStore(["registerSection"]);

  const handleNavigate = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  useEffect(() => {
    if (!contactRef.current) return;
    registerSection("Contact", contactRef.current.offsetTop);
  }, [contactRef, registerSection]);

  return (
    <Box
      as={"footer"}
      bgColor={"primary.300"}
      ref={contactRef}
      py={"16"}
      color={"white"}
    >
      <Flex direction={"column"} gap={"12"} alignItems={"center"}>
        <Heading as={"h2"} size={"2xl"}>
          Contact
        </Heading>
        <Flex gap={"4"}>
          {ContactInfoLink.map((v, i) => {
            return (
              <Tooltip label={v.label} key={`link_${i}`}>
                <IconButton
                  icon={v.icon}
                  aria-label={v.label}
                  size={"lg"}
                  onClick={() => (v.url ? handleNavigate(v.url) : null)}
                />
              </Tooltip>
            );
          })}
          {ContactInfoPopup.map((v, i) => {
            return (
              <Popover key={`popup_${i}`}>
                <Tooltip label={v.label}>
                  <Box>
                    <PopoverTrigger>
                      <IconButton
                        icon={v.icon}
                        aria-label={v.label}
                        size={"lg"}
                      />
                    </PopoverTrigger>
                  </Box>
                </Tooltip>
                <PopoverContent color="primary.500" my={"2"} w={"auto"} p={"2"}>
                  <PopoverHeader fontWeight="semibold">{v.label}</PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody color={"black"}>{v.info}</PopoverBody>
                </PopoverContent>
              </Popover>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
