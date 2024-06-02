import { Swiper } from "@/components";
import { PhotoType, ProjectType, imgByProject } from "@/constants";
import {
  AboutImage,
  CalendarContent,
  CookaContent,
  JoinusContent,
  PortfolioContent,
} from "@/containers";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import { useMemo } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectType;
}

const ProjectDrawer = ({ isOpen, onClose, data }: ProjectModalProps) => {
  const photo = useMemo(() => {
    return imgByProject[data.name];
  }, [data.name]);

  const renderItem = useMemo(() => {
    switch (data.name) {
      case "Join-Us":
        return JoinusContent;
      case "Calendar":
        return CalendarContent;
      case "Cooka":
        return CookaContent;
      case "Portfolio":
        return PortfolioContent;
      default:
        return () => <></>;
    }
  }, [data.name]);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{data.name}</DrawerHeader>
        <DrawerBody overflowY={"auto"}>
          <Flex direction={"column"} gap={"8"}>
            <Flex
              w={"full"}
              h={600}
              direction={"column"}
              gap={4}
              alignItems={"center"}
              boxShadow={"2xl"}
              overflow={"hidden"}
              p={2}
            >
              <Swiper<PhotoType> datas={photo} renderItem={AboutImage} />
            </Flex>
            {renderItem()}
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Button onClick={onClose}>Cancel</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDrawer;
