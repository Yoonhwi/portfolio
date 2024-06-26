import {
  Flex,
  Tooltip,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Box,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { FaBlog, FaGithub, FaPhone } from "react-icons/fa";
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

const ContactLink = () => {
  const handleNavigate = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  return (
    <Flex gap={"4"}>
      {ContactInfoLink.map((v, i) => {
        return (
          <Tooltip label={v.label} key={`link_${i}`}>
            <IconButton
              icon={v.icon}
              aria-label={v.label}
              colorScheme="gray"
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
                    colorScheme="gray"
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
  );
};

export default ContactLink;
