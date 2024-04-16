import { Box, IconButton, Tooltip, keyframes } from "@chakra-ui/react";
import { ReactElement, useState } from "react";

interface IconBoxProps {
  icon: ReactElement;
  label: string;
  link: string;
}

const iconAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const IconBox = ({ icon, label, link }: IconBoxProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Tooltip label={label}>
      <Box
        position={"relative"}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => {
          window.open(link, "_blank");
        }}
      >
        <Box
          borderRight={"8px solid #3182CE"}
          borderRadius={"0 30px 30px 0"}
          w={"42px"}
          h={"40px"}
          position={"absolute"}
          animation={`${iconAnimation} 1s linear infinite`}
          display={isHover ? "block" : "none"}
        />
        <IconButton
          isRound
          aria-label="github-icon"
          fontSize={"2rem"}
          icon={icon}
          _hover={{
            color: "primary.500",
            bgColor: "white",
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default IconBox;
