import { Box, Center, IconButton, Tooltip, keyframes } from "@chakra-ui/react";
import { ReactElement } from "react";

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
  return (
    <Tooltip label={label}>
      <Center
        position={"relative"}
        onClick={() => {
          window.open(link, "_blank");
        }}
      >
        <IconButton
          isRound
          aria-label="github-icon"
          fontSize={"2rem"}
          icon={icon}
          _hover={{
            color: "primary.500",
            bgColor: "white",
            "& + div": {
              visibility: "visible",
            },
          }}
        />
        <Box
          borderRight={"8px solid #3182CE"}
          borderTop={"8px solid white"}
          borderBottom={"8px solid white"}
          borderLeft={"8px solid white"}
          borderRadius={"full"}
          w={"44px"}
          h={"44px"}
          position={"absolute"}
          zIndex={-1}
          animation={`${iconAnimation} 1s linear infinite`}
          visibility={"hidden"}
          _hover={{
            visibility: "visible",
          }}
        />
      </Center>
    </Tooltip>
  );
};

export default IconBox;
