import { PhotoType } from "@/constants";
import { Image } from "@chakra-ui/react";

interface ProjectImageProps {
  data: PhotoType;
}
const ProjectImage = ({ data }: ProjectImageProps) => {
  return (
    <Image src={data.src} alt="project_img" minW={500} maxW={500} h={400} />
  );
};

export default ProjectImage;
