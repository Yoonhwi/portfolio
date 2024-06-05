import { useScrollStore } from "@/store";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollStore(["registerSection"]);

  useEffect(() => {
    if (!contactRef.current) return;
    registerSection("Contact", contactRef.current.offsetTop);
  }, [contactRef, registerSection]);

  return (
    <Box as={"footer"} h={600} bgColor={"primary.300"} ref={contactRef}></Box>
  );
};

export default Contact;
