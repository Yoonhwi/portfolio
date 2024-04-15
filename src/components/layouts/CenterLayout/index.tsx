import { Flex } from "@chakra-ui/react";

interface CenterLayoutProps {
  children?: React.ReactNode;
}
const CenterLayout = ({ children }: CenterLayoutProps) => {
  return (
    <Flex justify={"center"}>
      <Flex w={{ base: "100%", xl: "1280px" }} direction={"column"}>
        {children}
      </Flex>
    </Flex>
  );
};

export default CenterLayout;
