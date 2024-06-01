import { Swiper } from "@/components";
import { PhotoType, ProjectType, photo } from "@/constants";
import { AboutImage, JoinusDes } from "@/containers";
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
import "highlight.js/styles/a11y-dark.css";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectType;
}

const ProjectDrawer = ({ isOpen, onClose, data }: ProjectModalProps) => {
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
            <JoinusDes />
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
