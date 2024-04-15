import { Box } from "@chakra-ui/react";
import DefaultLayoutHeader from "./Header";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <DefaultLayoutHeader />
      <Box w={{ base: "100%" }} mt={"106px"} as={"main"}>
        {children}
      </Box>
    </>
  );
};

export default DefaultLayout;
